export type Subtask = {
	title: string
	isCompleted: boolean
}

export type Task = {
	title: string
	description: string
	status: string
	subtasks: Subtask[]
}

export type Column = {
	name: string
	tasks: Task[]
}

export type Board = {
	name: string
	id: string
	selected: boolean
	columns: string[]
}

export type BoardData = {
	boards: Board[]
}
