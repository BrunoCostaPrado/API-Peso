import websocket, { FastifyWebSocket } from "@fastify/websocket"

import { Weigh } from "../drizzle/schema"
import { app } from "../lib/api"
import { asc } from "drizzle-orm"
import { db } from "../drizzle/db"

export async function getWeighWs() {
	app.get("/getWeigh-ws", { websocket: true }, async (request, reply) => {
		const stream = ws.createWebSocketStream(socket, {
			/* options */
		})
		stream.setEncoding("utf8")
		stream.write("hello client")
		console.time("find Weigh-ws")

		stream.on("data", async function () {
			const data = await db.select().from(Weigh).orderBy(asc(Weigh))

			socket.on("message", (message) => {
				socket.send(data.toString())
			})

			socket.onmessage = (event: MessageEvent) => {
				console.log("Message from server: ", data.toString())
			}
			socket.onerror = (error: Event) => {
				console.error("Error: ", error)
			}
			socket.on("close", () => {
				console.log("WebSocket connection closed")
			})
			console.timeEnd("find Weigh-ws")
			console.log(data)
			return data
		})
	})
}
