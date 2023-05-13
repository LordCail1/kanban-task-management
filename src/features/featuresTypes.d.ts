type Subtask = {
	title: string
	isCompleted: boolean
}

type Task = {
	title: string
	description: string
	status: string
	subtasks: Subtask[]
}

type Column = {
	name: string
	tasks: Task[]
}

type Board = {
	name: string
	id: string
	selected: boolean
	columns: string[]
}

type BoardData = {
	boards: Board[]
}
