import { app } from "../lib/api"
import { weigh, Weigh } from "../lib/types"

export async function weigh() {
	app.post("/setWeigh", async (req, reply) => {
		const { date, weigh } = Weigh.parse(req.body)
		// const setWeigh = await weigh.create({})

		return reply.status(201).send({})
	})
}
