import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import * as fs from 'fs';
import * as path from 'path';
import { getDb } from './index';
import * as schema from './schema';

async function seed() {
  const db = getDb();
  const locales = ['en', 'ru', 'nl', 'fr', 'ua'];
  const messagesDir = path.join(process.cwd(), 'messages');

  console.log('🌱 Starting database seeding...');

  for (const locale of locales) {
    const filePath = path.join(messagesDir, `${locale}.json`);
    if (!fs.existsSync(filePath)) {
      console.warn(`⚠️ Locale file not found: ${filePath}`);
      continue;
    }

    const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    console.log(`📦 Processing locale: ${locale}`);

    interface BaseContent {
      title: string;
      description: string;
    }

    interface ReviewContent {
      title: string;
      name: string;
      car: string;
    }

    // 1. Seed Services
    if (content.services?.cards) {
      const serviceCards = content.services.cards as Record<string, BaseContent>;
      for (const [slug, data] of Object.entries(serviceCards)) {
        const { title, description } = data;
        await db.insert(schema.services).values({
          locale,
          slug,
          title,
          description,
        }).onConflictDoNothing();
      }
    }

    // 2. Seed Benefits
    if (content.benefits?.cards) {
      const benefitCards = content.benefits.cards as Record<string, BaseContent>;
      for (const [slug, data] of Object.entries(benefitCards)) {
        const { title, description } = data;
        await db.insert(schema.benefits).values({
          locale,
          slug,
          title,
          description,
        }).onConflictDoNothing();
      }
    }

    // 3. Seed Reviews
    if (content.reviews?.slides) {
      const reviewSlides = content.reviews.slides as Record<string, ReviewContent>;
      const reviewImages: Record<string, string> = {
        mason: '/reviews/review-1.png',
        viktor: '/reviews/review-2.png',
        marphisa: '/reviews/review-3.png',
        arnou: '/reviews/review-4.png',
        anton: '/reviews/review-5.png',
      };
      for (const [slug, data] of Object.entries(reviewSlides)) {
        const { title, name, car } = data;
        await db.insert(schema.reviews).values({
          locale,
          slug,
          title,
          name,
          car,
          image: reviewImages[slug] || null,
        }).onConflictDoNothing();
      }
    }

    // 4. Seed FAQ
    if (content.faq?.questions) {
      const faqQuestions = content.faq.questions as Record<string, { title: string, description: string }>;
      for (const [slug, data] of Object.entries(faqQuestions)) {
        const { title: question, description: answer } = data;
        await db.insert(schema.faq).values({
          locale,
          slug,
          question,
          answer,
        }).onConflictDoNothing();
      }
    }

    // 5. Seed Contacts
    if (content.footer?.phone && content.footer?.email && content.footer?.address) {
      await db.insert(schema.contacts).values({
        locale,
        phone: content.footer.phone,
        email: content.footer.email,
        address: content.footer.address,
        googleMapsLink: content.footer.google_maps_link ?? '',
        whatsappNumber: content.footer.phone.replace(/\s/g, ''),
      }).onConflictDoNothing();
    }
  }


  console.log('✅ Seeding completed successfully!');
}

seed().catch((err) => {
  console.error('❌ Seeding failed:', err);
  process.exit(1);
});
