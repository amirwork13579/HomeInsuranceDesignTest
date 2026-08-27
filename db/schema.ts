import { sql } from "drizzle-orm";
import { index, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const enquiries = sqliteTable(
  "enquiries",
  {
    id: text("id").primaryKey(),
    firstName: text("first_name").notNull(),
    lastName: text("last_name").notNull(),
    email: text("email").notNull(),
    phone: text("phone").notNull(),
    claimType: text("claim_type").notNull().default(""),
    message: text("message").notNull().default(""),
    source: text("source").notNull(),
    status: text("status").notNull().default("new"),
    createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => [
    index("enquiries_status_idx").on(table.status),
    index("enquiries_created_at_idx").on(table.createdAt),
  ]
);

export const enquiryActivity = sqliteTable(
  "enquiry_activity",
  {
    id: text("id").primaryKey(),
    enquiryId: text("enquiry_id")
      .notNull()
      .references(() => enquiries.id, { onDelete: "cascade" }),
    kind: text("kind").notNull(),
    content: text("content").notNull().default(""),
    fromStatus: text("from_status"),
    toStatus: text("to_status"),
    actorEmail: text("actor_email"),
    actorName: text("actor_name").notNull(),
    createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => [
    index("enquiry_activity_enquiry_idx").on(table.enquiryId),
    index("enquiry_activity_created_at_idx").on(table.createdAt),
  ]
);
