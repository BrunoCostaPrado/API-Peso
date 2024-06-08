import { z } from "zod"

export const Weight = z.object({
	date: z.string(),
	weight: z.number()
})

export type weight = z.infer<typeof Weight>
