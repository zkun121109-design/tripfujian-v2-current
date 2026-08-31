import { sql } from "drizzle-orm";
import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const inquiries = sqliteTable("inquiries", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  contact: text("contact").notNull(),
  wechat: text("wechat").notNull().default(""),
  source: text("source").notNull().default(""),
  arrivalCity: text("arrival_city").notNull().default(""),
  returnCity: text("return_city").notNull().default(""),
  destinations: text("destinations").notNull().default(""),
  travelDate: text("travel_date").notNull().default(""),
  days: text("days").notNull().default(""),
  adults: integer("adults").notNull().default(1),
  children: integer("children").notNull().default(0),
  groupType: text("group_type").notNull().default(""),
  travelType: text("travel_type").notNull().default(""),
  hotelLevel: text("hotel_level").notNull().default(""),
  roomType: text("room_type").notNull().default(""),
  rooms: text("rooms").notNull().default(""),
  vehicle: text("vehicle").notNull().default(""),
  budget: text("budget").notNull().default(""),
  notes: text("notes").notNull().default(""),
  attributionSource: text("attribution_source").notNull().default(""),
  attributionMedium: text("attribution_medium").notNull().default(""),
  attributionCampaign: text("attribution_campaign").notNull().default(""),
  landingPage: text("landing_page").notNull().default(""),
  status: text("status").notNull().default("new"),
  adminNote: text("admin_note").notNull().default(""),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});

export const siteSettings = sqliteTable("site_settings", {
  key: text("key").primaryKey(),
  value: text("value").notNull().default(""),
  updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});

export const analyticsEvents = sqliteTable("analytics_events", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  visitorHash: text("visitor_hash").notNull(),
  path: text("path").notNull(),
  country: text("country").notNull().default("未知"),
  device: text("device").notNull().default("其他"),
  source: text("source").notNull().default("直接访问"),
  medium: text("medium").notNull().default(""),
  campaign: text("campaign").notNull().default(""),
  browser: text("browser").notNull().default("其他"),
  operatingSystem: text("operating_system").notNull().default("其他"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
}, (table) => [
  index("idx_analytics_created").on(table.createdAt),
  index("idx_analytics_visitor_created").on(table.visitorHash, table.createdAt),
]);
