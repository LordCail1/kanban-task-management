import { ZodType, z } from "zod"



const BoardManagerSchema: ZodType<BoardManagerPopupWindowCreateFormData> = z.object({
	// boardName: z.string().min(3).max(30),
	board: z.object({
		boardName: z.string().min(3).max(30),
		id: z.string().min(3).max(30),
	}),
	columns: z.array(
		z.object({
			columnName: z.string().min(3).max(30),
			id: z.string().min(3).max(30),
		})
	),
})

export default BoardManagerSchema
