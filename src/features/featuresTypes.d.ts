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





/**
 * values filled up when creating a new board
 * @params {boardName} name of board you are creating
 * @params {createBoardColumnNames} array of column names you are adding when creating a board
 * @params {valid} boolean that helps make sure fields are valid
 */
type CreateNewBoardFields = {
	value: {
		createBoardName: CreateItemName
		createBoardColumnNames: CreateItemName[]
	}
}

/**
 * the multiple columns you are adding when creating a new board
 * @params{id} id that helps track column name in the list when creating a new board
 * @params {name} name of the column when creating a new board
 */
type CreateItemName = {
	id: string
	name: string
	valid?: boolean
}
