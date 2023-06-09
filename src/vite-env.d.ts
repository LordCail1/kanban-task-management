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
	title: stringh
}

/**
 * Those are all strings that represent components that can be passes as popup components for the popupSlice
 */

type PopupHOCComponent = "BoardManagerPopupWindow" | "DropdownMenu" | "TaskManagerViewerPopupWindow" | "TaskManagerPopupWindow" | "DeletePopupWindow"

type KebabMenuComponent = "KebabMenu"

type DeletePopupStyle = "Task" | "Board"

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
 * @param title title of the subtask
 * @param isCompleted if subtask is completed or not
 */
type Subtask = {
	title: string
	id: string
	isCompleted: boolean
}

/**
 * individual tasks
 * @param title title of the task
 * @param description description of the task
 * @param status status of the task
 * @param subtasks IDs of all the subtasks belonging to this task
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

type Button = {
	text?: string
	handleClick?: () => void
	backgroundDarkColor: string
	backgroundLightColor: string
	backgroundHoverDarkColor: string
	backgroundHoverLightColor: string
	textDarkColor: string
	textLightColor: string
	textHoverDarkColor: string
	textHoverLightColor: string
	fontSize?: string
	fontWeight?: number
}

/**
 * Flexible CSS properties
 */

type Direction = {
	left?: string | "auto"
	right?: string | "auto"
	top?: string | "auto"
	bottom?: string | "auto"
}
