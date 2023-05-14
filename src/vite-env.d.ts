/// <reference types="vite/client" />

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


/**
 * Those are all strings that represent components that can be passes as popup components for the popupSlice
 */
type HOCComponents = "AddNewBoardPopupWindow"

