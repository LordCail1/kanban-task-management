import { ZodType, z } from "zod"

const BoardManagerSchema: ZodType<BoardManagerPopupWindowFormData> = z.object({
	// boardName: z.string().min(3).max(30),
	board: z.object({
		name: z.string().min(3).max(60),
		id: z.string().min(3).max(30),
	}),
	columns: z.array(
		z.object({
			name: z.string().min(3).max(60),
			id: z.string().min(3).max(30),
		})
	),
})

export default BoardManagerSchema
