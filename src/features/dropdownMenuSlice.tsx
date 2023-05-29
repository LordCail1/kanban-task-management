import { createSlice } from "@reduxjs/toolkit"

type InitialState = {
	active: boolean
}

const initialState: InitialState = {
	active: false,
}

const dropdownMenuSlice = createSlice({
	name: "dropdownMenu_slice",
	initialState,
	reducers: {
		activateDropdown: (state) => {
			state.active = true
		},
		deActivateDropdown: (state) => {
			state.active = false
		},
	},
})

export const { activateDropdown, deActivateDropdown } =
	dropdownMenuSlice.actions
export default dropdownMenuSlice.reducer
