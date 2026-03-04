import { getDb } from "./index";
import { services, benefits, reviews, faq } from "./schema";
import { eq } from "drizzle-orm";

export async function getServices(locale: string) {
  const db = getDb();
  return db.select()
    .from(services)
    .where(eq(services.locale, locale))
    .orderBy(services.order, services.id);
}

export async function getBenefits(locale: string) {
  const db = getDb();
  return db.select()
    .from(benefits)
    .where(eq(benefits.locale, locale))
    .orderBy(benefits.order, benefits.id);
}

export async function getReviews(locale: string) {
  const db = getDb();
  return db.select()
    .from(reviews)
    .where(eq(reviews.locale, locale))
    .orderBy(reviews.order, reviews.id);
}

export async function getFaq(locale: string) {
  const db = getDb();
  return db.select()
    .from(faq)
    .where(eq(faq.locale, locale))
    .orderBy(faq.order, faq.id);
}
