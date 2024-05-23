import { app, host, port } from "$lib/api"

import { hello } from "$routes/hello"
import { hello_ws } from "$routes/hello-ws"
import { root } from "$routes/root"
import websocket from "@fastify/websocket"

app.register(websocket, { options: { maxPayload: 1024 } })
app.register(hello)
app.register(hello_ws)
app.register(root)

export async function main() {
	await app.listen({ port, host })

	console.log(`Server listening on ${host}:${port}`)
}

main()
