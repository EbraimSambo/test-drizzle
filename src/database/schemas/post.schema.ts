import { int } from "drizzle-orm/mysql-core";
import { boolean, integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { users } from "./user.schema";
import { relations } from "drizzle-orm";

export const posts = pgTable("posts",{
    id: serial("id").primaryKey(),
    description: text("description"),
    title: text("title"),
    published: boolean("published").default(false),
    createdAt: timestamp("createdAt").defaultNow(),
    userId: integer("user_id").references(()=>users.id)
})

export const postsRelations = relations(posts, ({one})=>({
    user: one(users, {
        fields: [posts.userId],
        references: [users.id]
    })
}))