


/**
 * individual subtasks
 * @params {title} title of the subtask
 * @params {isCompleted} if subtask is completed or not
 */
type Subtask = {
	title: string
	id: string
	isCompleted: boolean
}

/**
 * individual tasks
 * @params {title} title of the task
 * @params {description} description of the task
 * @params {status} status of the task
 * @params {subtasks} IDs of all the subtasks belonging to this task
 */
type Task = {
	title: string
	id: string
	description: string
	status: string
	subtasks: string[]
}


/**
 * individual columns
 * @params {name} name of the column
 * @params {tasks} IDs of all the tasks belonging to this column
 */
type Column = {
	name: string
	id: string
	tasks: string[]
}




/////////////////////////boards

/**
 * individual boards
 * @params {name} name of the board
 * @params {id} id of the board
 * @params {selected} if this is the currently selected board
 * @params {columns} IDs of all the columns belonging to this board
 */
type Board = {
	name: string
	id: string
	selected: boolean
	columns: string[]
}

/**
 * all of the boards together
 * @params {boards} array of all boards
 */

type BoardData = {
	boards: Board[]
}




