import { createSlice } from "@reduxjs/toolkit"

type board = {
	name: string
	selected: boolean
}

type initialState = {
	value: board[]
}

const initialState: initialState = {
	value: [
		{
			name: "Platform Launch",
			selected: true,
		},
	],
}

const boardSlice = createSlice({
	name: "board_slice",
	initialState,
	reducers: {
		addBoard: (state, action) => {
			return state
		},
	},
})

export const { addBoard } = boardSlice.actions
export default boardSlice.reducer
