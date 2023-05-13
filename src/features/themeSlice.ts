import { createSlice } from "@reduxjs/toolkit"


export type ThemeStyleSlice = {
	style: ThemeBoolean
}

const initialState: ThemeStyleSlice = {
	style: "dark"
}

const themeSlice = createSlice({
	name: "theme_slice",
	initialState,
	reducers: {
		changeThemeStyle: (state: ThemeStyleSlice) => {
			state.style === "dark" ? state.style = 'light' : state.style = 'dark'
		},
	},
})

export default themeSlice.reducer
export const { changeThemeStyle } = themeSlice.actions
