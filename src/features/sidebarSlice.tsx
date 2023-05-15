import { createSlice } from "@reduxjs/toolkit"

type InitialState = {
	active: boolean
}

const initialState: InitialState = {
	active: true
}

const sidebarSlice = createSlice({
	name: "sidebar_slice",
	initialState,
	reducers: {
		activateSidebar: (state) => {
			console.log("you activated")
			state.active = true
		},
		deActivateSidebar: (state) => {
			console.log("you deactivated")
			state.active = false
		},
	},
})

export const { activateSidebar, deActivateSidebar } = sidebarSlice.actions
export default sidebarSlice.reducer
