import { app } from "@/lib/api"

export async function root() {
	const response = "hello, u good?"

	app.get("/", async (req, reply) => {
		return await reply.status(202).send(response)
	})
}
