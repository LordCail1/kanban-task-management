export type subtask = {
	title: string
	isCompleted: boolean
}

export type task = {
	title: string
	description: string
	status: string
	subtasks: subtask[]
}

export type column = {
	name: string
	tasks: task[]
}

export type board = {
	name: string
    id: string
	selected: boolean
	columns: string[]
}

export type boardData = {
	boards: board[]
}