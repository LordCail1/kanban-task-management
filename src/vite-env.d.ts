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

type HOCComponents = "BoardManagerPopupWindow" | "DropdownMenu" | "TaskManagerPopupWindow"

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
 * @param name name of the column
 * @param id id of the column
 * @param color hex color assigned to the column
 * @param tasks IDs of all the tasks belonging to this column
 * 
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
 * @param name name the board
 * @param id id of the board
 * @param selected this is the currently selected board
 * @param columns IDs of all the columns belonging to this board
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
 * Different places where we can get the menu that is normally visible in the sidebar
 * @params {menuArea} areas where menu can be visible
 */
type MenuArea = {
	menuArea: "sidebar" | "dropdown"
}










//form types for creating boards
////////////////////////////////////////////////////////////////////////////////////////////////////////

type BoardManagerPopupWindowCreateFormData = {
	board: {
		boardName: string
		id: string
	}
	columns: ColumnCreateFormData[]
}	

/**
 * Form structure for creating a new column in a board 
 * @params {columnName} name of the column that will be created
 */
type ColumnCreateFormData = {
	columnName: string
	id: string
}	




//form types for editing boards
////////////////////////////////////////////////////////////////////////////////////////////////////////


type BoardManagerPopupWindowEditFormData = {
	board: {
		boardName: string
		id: string
	}
	columns: ColumnEditFormData[]
}

type ColumnEditFormData = {
	columnName: string
	id: string
}








//Payload types
/////////////////////////////////////////////////////////////////////////////




//////////////////////////////

type BoardManagerEditingPayload = {
	columnsInfo: UpdatingColumnsType
	boardInfo: Board
}



/**
 * object containing the most used properties needed to update, delete or create columns when editing a form
 * @param deletedColumns array of columns that were deleted during the editing
 * @param newColumns array of columns that were created during the editing
 * @param columnsToUpdate array of columns that were there before the editing started, and are still there. this array
 * shows the list of columsn that simply need to be edited
 */
type UpdatingColumnsType = {
	deletedColumns: ColumnEditFormData[]
	newColumns: ColumnEditFormData[]
	columnsToUpdate: ColumnEditFormData[]
}




