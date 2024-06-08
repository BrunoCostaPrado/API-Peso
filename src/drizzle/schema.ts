import {
	boolean,
	doublePrecision,
	integer,
	pgEnum,
	pgTable,
	primaryKey,
	real,
	text,
	timestamp,
	unique,
	uniqueIndex,
	uuid,
	varchar
} from "drizzle-orm/pg-core"

import { createId } from "@paralleldrive/cuid2"

// export const UserRole = pgEnum("userRole", ["ADMIN", "BASIC"])

// export const UserTable = pgTable(
// 	"user",
// 	{
// 		id: uuid("id").primaryKey().defaultRandom(),
// 		name: varchar("name", { length: 255 }).notNull(),
// 		age: integer("age").notNull(),
// 		email: varchar("email", { length: 255 }).notNull(),
// 		role: UserRole("userRole").default("BASIC").notNull()
// 	},
// 	(table) => {
// 		return {
// 			emailIndex: uniqueIndex("emailIndex").on(table.email),
// 			uniqueNameAndAge: unique("uniqueNameAndAge").on(table.name, table.age)
// 		}
// 	}
// )

// export const UserPreferencesTable = pgTable("userPreferences", {
// 	id: uuid("id").primaryKey().defaultRandom(),
// 	emailUpdates: boolean("emailUpdates").notNull().default(false),
// 	userId: uuid("userId")
// 		.notNull()
// 		.references(() => UserTable.id)
// 		.notNull()
// })

// export const PostTable = pgTable("post", {
// 	id: uuid("id").primaryKey().defaultRandom(),
// 	title: varchar("title", { length: 255 }).notNull(),
// 	averageRating: real("averageRating").notNull().default(0),
// 	createAt: timestamp("createAt").defaultNow().notNull(),
// 	UpdateAt: timestamp("updateAt").defaultNow().notNull(),
// 	authorId: uuid("authorId")
// 		.notNull()
// 		.references(() => UserTable.id)
// 		.notNull()
// })

// export const CategoryTable = pgTable("category", {
// 	id: uuid("id").primaryKey().defaultRandom(),
// 	name: varchar("name", { length: 255 }).notNull()
// })

// export const PostCategory = pgTable(
// 	"postCategory",
// 	{
// 		postId: uuid("postId")
// 			.references(() => PostTable.id)
// 			.notNull(),
// 		categoryId: uuid("categoryId")
// 			.references(() => CategoryTable.id)
// 			.notNull()
// 	},
// 	(table) => {
// 		return { pk: primaryKey({ columns: [table.postId, table.categoryId] }) }
// 	}
// )

export const Weight = pgTable("weight", {
	id: text("id")
		.$defaultFn(() => createId())
		.primaryKey(),
	date: text("date").notNull(),
	weight: doublePrecision("weight").notNull(),
	createdAt: timestamp("createdAt").defaultNow().notNull()
})
