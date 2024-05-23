import { app } from "../lib/api"
import { type weigh, Weigh as Peso } from "../lib/types"
import { Weigh } from "../drizzle/schema"
import { db } from "../drizzle/db"

export async function setWeigh() {
	app.post("/setWeigh", async (req, reply) => {
		console.time("set Weigh")
		const { date, weigh } = Peso.parse(req.body)
		const push = await db
			.insert(Weigh)
			.values({
				date: date,
				weigh: weigh
			})
			.returning({
				id: Weigh.id
			})
		console.timeEnd("set Weigh")
		return reply.status(201).send({ push })
	})
}
