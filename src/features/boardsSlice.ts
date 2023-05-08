import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { board, boardData } from "./types"



export type initialState = {
	value: boardData
}

const initialState: initialState = {
	value: {
		boards: [
			{
				name: "Platform Launch",
				id: 'OLk7-93MkK',
				selected: true,
				columns: ['z8UHNIXCKV', 'nLgowJGVMG', 'fxLoDxr5No' ]
			},
			{
				name: "Marketing Plan",
				id: 'EKZAsz0tgO',
				selected: false,
				columns: ['W-LqSiiKad', '3UiGitAZWn', '8YlbhLSPE8']
			},
			{
				name: "Roadmap",
				id: 'xzA7utwmaW',
				selected: false,
				columns: ['iT8JB5bqpt', '0anclfaunM', 'rDWYcYhbuO']
			},
		],
	},
}

const boardSlice = createSlice({
	name: "board_slice",
	initialState,
	reducers: {
		addBoard: (state, action: PayloadAction<board>) => {
			state.value.boards.push(action.payload)
		},
	},
})

export const { addBoard } = boardSlice.actions
export default boardSlice.reducer
