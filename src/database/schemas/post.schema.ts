import { boolean, int, mysqlTable, serial, text, timestamp } from "drizzle-orm/mysql-core";
import { users } from "./user.schema";
import { relations } from "drizzle-orm";

export const posts = mysqlTable("posts",{
    id: serial("id").primaryKey(),
    description: text("description"),
    title: text("title"),
    published: boolean("published").default(false),
    createdAt: timestamp("createdAt").defaultNow(),
    userId: int("user_id").references(()=>users.id)
})

export const postsRelations = relations(posts, ({one})=>({
    user: one(users, {
        fields: [posts.userId],
        references: [users.id]
    })
}))