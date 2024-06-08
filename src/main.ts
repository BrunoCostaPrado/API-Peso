import { app, host, port } from "$lib/api"

import { getWeight } from "$routes/get-weight"
// import { getWeighWs } from "$routes/get-weigh-ws"
import { hello } from "$routes/hello"
import { hello_ws } from "$routes/hello-ws"
import { root } from "$routes/root"
import { setWeight } from "$routes/set-weight"
import websocket from "@fastify/websocket"

app.register(websocket, { options: { maxPayload: 1024 } })
app.register(hello)
app.register(hello_ws)
app.register(root)
app.register(setWeight)
app.register(getWeight)
// app.register(getWeighWs)

export async function main() {
	await app.listen({ port, host })

	console.log(`Server listening on ${host}:${port}`)
}

main()
