import { app, host, port } from "$lib/api"

import { getWeigh } from "$routes/get-weigh"
import { hello } from "$routes/hello"
import { hello_ws } from "$routes/hello-ws"
import { root } from "$routes/root"
import { setWeigh } from "$routes/set-weigh"
import websocket from "@fastify/websocket"

app.register(websocket, { options: { maxPayload: 1024 } })
app.register(hello)
app.register(hello_ws)
app.register(root)
app.register(setWeigh)
app.register(getWeigh)

export async function main() {
	await app.listen({ port, host })

	console.log(`Server listening on ${host}:${port}`)
}

main()
