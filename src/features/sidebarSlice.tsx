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
			console.log('supposed to become true')
			state.active = true
		},
		deActivateSidebar: (state) => {
			console.log('supposed to become false')
			state.active = false
		},
	},
})

export const { activateSidebar, deActivateSidebar } = sidebarSlice.actions
export default sidebarSlice.reducer
