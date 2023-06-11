import { ZodType, z } from "zod"

const TaskManagerSchema: ZodType<TaskManagerPopupWindowFormData> = z.object({
	task: z.object({
		title: z.string(),
		description: z.string(),
	}),
	subtasks: z.array(
		z.object({
			title: z.string(),
			id: z.string(),
			isCompleted: z.boolean(),
		})
	),
	columns: z.array(
		z.object({
			name: z.string(),
			id: z.string(),
			color: z.string(),
			tasks: z.array(z.string()),
		})
	),
})

export default TaskManagerSchema
