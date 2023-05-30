/// <reference types="vite/client" />

type Active = {
	active: boolean
}

type Theme = {
	colors: {
		black: string
		dark_grey: string
		light_grey: string
		lines_dark: string
		lines_light: string
		main_purple_hover: string
		main_purple_hover2: string
		main_purple: string
		medium_grey: string
		red_hover: string
		red: string
		very_dark_grey: string
		white: string
	}
	mediaQueries: {
		desktop: string
		tablet: string
		mobile: string
	}
	transitionTimes: {
		slow: string
		medium: string
		fast: string
	}
	standards: {
		desktopSidebarWidth: string
		tabletSidebarWidth: string
	}
}

type ThemeBoolean = "dark" | "light"

type UserInput = {
	title?: string
	placeHolder?: string
}

type UserInputTitle = {
	title: string
}

/**
 * Those are all strings that represent components that can be passes as popup components for the popupSlice
 */
type HOCComponents = "AddNewBoardPopupWindow" | "DropdownMenu"

type Popup = {
	active: boolean
	content: React.ComponentType<any> | undefined
}

/**
 * Buttons that belong inside pop-up windows
 */

type PopupBtn = {
	text?: string
	handleClick?: () => void
}

type InputFieldValidation = {
	valid: boolean
}

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
	color: string
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

/**
 * Form structure for creating a new board
 * @params {boardName} name of the board that will be created
 * @params {columns} array of column names when creating a new board
 */
type AddNewBoardPopupWindowFormData = {
	boardName: string
	columns: ColumnFormData[]
}

/**
 * Form structure for creating a new column in a board
 * @params {columnName} name of the column that will be created
 */
type ColumnFormData = {
	columnName: string
}





/**
 * Different places where we can get the menu that is normally visible in the sidebar
 * @params {menuArea} areas where menu can be visible
 */
type MenuArea = {
	menuArea: "sidebar" | "dropdown"
}
