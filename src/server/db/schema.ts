import { sql } from "drizzle-orm";
import {
  index,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const boards = pgTable(
  "board",
  {
    id: serial("id").primaryKey(),
    title: varchar("title", { length: 256 }).notNull(),

    userId: varchar("userId", { length: 256 }).notNull(),

    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt"),
  },
  (example) => ({
    titleIndex: index("title_idx").on(example.title),
  }),
);
