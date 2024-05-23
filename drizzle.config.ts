import { Config, defineConfig } from "drizzle-kit"

// export default {
// 	schema: "./src/drizzle/schema.ts",
// 	out: "./src/drizzle/migrations",
// 	dialect: "postgresql",
// 	// driver: "pg",
// 	dbCredentials: {
// 		url: process.env.DATABASE_URL
// 	},
// 	verbose: true,
// 	strict: true
// }

export default defineConfig({
	schema: "./src/drizzle/schema.ts",
	out: "./src/drizzle/migrations",
	dialect: "postgresql",
	// driver: "pg",
	dbCredentials: {
		url: process.env.DATABASE_URL as string,
		user: process.env.POSTGRES_USER,
		password: process.env.POSTGRES_PASSWORD
	},
	verbose: true,
	strict: true
}) satisfies Config
