import { ZodType, z } from "zod"

const TaskManagerSchema: ZodType<TaskManagerPopupWindowFormData> = z.object({
	task: z.object({
		title: z.string().min(3).max(60),
		description: z.string(),
		id: z.string().min(3).max(30),
	}),
	subtasks: z.array(
		z.object({
			title: z.string().min(3),
			id: z.string().min(3).max(30),
			isCompleted: z.boolean(),
		})
	),
	column: z.object({
		name: z.string().min(3).max(30),
		id: z.string().min(3).max(30),
		color: z.string().min(3).max(30),
		tasks: z.array(z.string()),
	}),
})

export default TaskManagerSchema
