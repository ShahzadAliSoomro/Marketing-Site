import { db } from "@/database/drizzle";
import { pgTable, varchar } from "drizzle-orm/pg-core";




export const getInTouchTable = pgTable("get_in_touch", {
    fullName: varchar("full_name", { length: 100 }).notNull(),
    email: varchar("email", { length: 255 }).notNull(),
    company: varchar("company", { length: 255 }).notNull(),
    message: varchar("message", { length: 10000 }).notNull(),
})