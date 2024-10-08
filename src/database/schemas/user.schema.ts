import { relations } from "drizzle-orm";
import { pgTable, serial, text } from "drizzle-orm/pg-core";
import { posts } from "./post.schema";



export const users = pgTable("users",{
    id: serial("id").primaryKey(),
    email: text("email").unique(),
    name: text("name"),
    password: text("password")
})

export const postRelations = relations(users, ({many})=>({
    posts: many(posts)
}))