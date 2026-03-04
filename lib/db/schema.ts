import { pgTable, text, serial, integer, timestamp, uniqueIndex } from "drizzle-orm/pg-core";

export const translations = pgTable("translations", {
  id: serial("id").primaryKey(),
  locale: text("locale").notNull(),
  key: text("key").notNull(),
  value: text("value").notNull(),
  updatedAt: timestamp("updated_at").defaultNow(),
}, (table) => ({
  localeKeyIdx: uniqueIndex("locale_key_idx").on(table.locale, table.key),
}));

export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  locale: text("locale").notNull(),
  slug: text("slug").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  order: integer("order").default(0),
}, (table) => ({
    localeSlugIdx: uniqueIndex("services_locale_slug_idx").on(table.locale, table.slug),
}));

export const benefits = pgTable("benefits", {
  id: serial("id").primaryKey(),
  locale: text("locale").notNull(),
  slug: text("slug").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  order: integer("order").default(0),
}, (table) => ({
    localeSlugIdx: uniqueIndex("benefits_locale_slug_idx").on(table.locale, table.slug),
}));

export const reviews = pgTable("reviews", {
  id: serial("id").primaryKey(),
  locale: text("locale").notNull(),
  slug: text("slug").notNull(),
  title: text("title").notNull(),
  name: text("name").notNull(),
  car: text("car").notNull(),
  stars: integer("stars").default(5),
  image: text("image"),
  order: integer("order").default(0),
}, (table) => ({
    localeSlugIdx: uniqueIndex("reviews_locale_slug_idx").on(table.locale, table.slug),
}));

export const faq = pgTable("faq", {
  id: serial("id").primaryKey(),
  locale: text("locale").notNull(),
  slug: text("slug").notNull(),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
  order: integer("order").default(0),
}, (table) => ({
    localeSlugIdx: uniqueIndex("faq_locale_slug_idx").on(table.locale, table.slug),
}));

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  locale: text("locale").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  address: text("address").notNull(),
  googleMapsLink: text("google_maps_link").notNull(),
  whatsappNumber: text("whatsapp_number").notNull(),
}, (table) => ({
  localeIdx: uniqueIndex("contacts_locale_idx").on(table.locale),
}));

