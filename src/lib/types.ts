import { z } from "zod"

export const Weigh = z.object({
	date: z.string(),
	weigh: z.number()
})

export type weigh = z.infer<typeof Weigh>
