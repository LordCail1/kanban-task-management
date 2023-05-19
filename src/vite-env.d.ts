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
type HOCComponents = "AddNewBoardPopupWindow"

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





