import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { act } from "react-dom/test-utils"

export type board = {
	name: string
	selected: boolean
}

export type initialState = {
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
		addBoard: (state, action: PayloadAction<board>) => {
			state.value.push(action.payload)
		},
	},
})

export const { addBoard } = boardSlice.actions
export default boardSlice.reducer
