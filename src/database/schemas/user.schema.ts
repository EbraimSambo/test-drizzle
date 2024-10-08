import { relations } from "drizzle-orm";
import { posts } from "./post.schema";
import { mysqlTable, serial, text } from "drizzle-orm/mysql-core";



export const users = mysqlTable("users",{
    id: serial("id").primaryKey(),
    email: text("email").unique(),
    name: text("name"),
    password: text("password")
})

export const postRelations = relations(users, ({many})=>({
    posts: many(posts)
}))