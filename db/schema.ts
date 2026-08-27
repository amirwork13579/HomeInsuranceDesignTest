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
