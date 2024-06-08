import { Weight } from "../drizzle/schema"
import { app } from "../lib/api"
import { asc } from "drizzle-orm"
import { db } from "../drizzle/db"

export async function getWeight() {
	app.get("/getWeight", async (request, reply) => {
		console.time("find Weight")
		const data = await db.select().from(Weight).orderBy(asc(Weight))
		console.timeEnd("find Weight")
		return data
	})
}
