import { app } from "@/lib/api"
import websocket from "@fastify/websocket"

export async function hello_ws() {
	app.get("/hello-ws", { websocket: true }, (socket, req) => {
		socket.on("message", (message) => {
			socket.send("Hi")
		})

		socket.on("close", () => {
			console.log("WebSocket connection closed")
		})
	})
}
