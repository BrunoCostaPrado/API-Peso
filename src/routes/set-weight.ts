import { app } from "../lib/api"
import { type weight, Weight as Peso } from "../lib/types"
import { Weight } from "../drizzle/schema"
import { db } from "../drizzle/db"

export async function setWeight() {
	app.post("/setWeight", async (req, reply) => {
		console.time("set Weight")
		const { date, weight } = Peso.parse(req.body)
		const push = await db
			.insert(Weight)
			.values({
				date: date,
				weight: weight
			})
			.returning({
				id: Weight.id
			})
		console.timeEnd("set Weight")
		return reply.status(201).send({ push })
	})
}
