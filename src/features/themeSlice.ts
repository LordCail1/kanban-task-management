import { createSlice } from "@reduxjs/toolkit"

export type ThemeStyleSlice = {
	value: "dark" | "light"
}

const initialState: ThemeStyleSlice = {
	value: "dark"
}

const themeSlice = createSlice({
	name: "theme_slice",
	initialState,
	reducers: {
		changeThemeStyle: (state: ThemeStyleSlice) => {
			state.value === "dark" ? state.value = 'light' : state.value = 'dark'
		},
	},
})

export default themeSlice.reducer
export const { changeThemeStyle } = themeSlice.actions
