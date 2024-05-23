import { app } from "@/lib/api"

export async function hello() {
	app.get("/hello", async (req, reply) => {
		return await reply.status(202).send("hello")
	})
}
