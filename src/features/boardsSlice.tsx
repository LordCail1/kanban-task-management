import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { CreateBoardColumnName } from "./popupWindows/addNewBoardSlice"

export type InitialState = {
	value: BoardData
}

const initialState: InitialState = {
	value: {
		boards: [
			{
				name: "Platform Launch",
				id: "OLk7-93MkK",
				selected: true,
				columns: ["z8UHNIXCKV", "nLgowJGVMG", "fxLoDxr5No"],
			},
			{
				name: "Marketing Plan",
				id: "EKZAsz0tgO",
				selected: false,
				columns: ["W-LqSiiKad", "3UiGitAZWn", "8YlbhLSPE8"],
			},
			{
				name: "Roadmap",
				id: "xzA7utwmaW",
				selected: false,
				columns: ["iT8JB5bqpt", "0anclfaunM", "rDWYcYhbuO"],
			},
		],
	},
}

const boardSlice = createSlice({
	name: "board_slice",
	initialState,
	reducers: {
		addBoard: (
			state,
			action: PayloadAction<{
				boardName: string
				boardColumns: CreateBoardColumnName[]
			}>
		) => {
			console.log("board columns", action.payload.boardColumns)
			console.log("board name", action.payload.boardName)
		},
		selectBoard: (state, action: PayloadAction<string>) => {
			const currentBoard = state.value.boards.find(
				(board) => board.selected === true
			)
			if (currentBoard) currentBoard.selected = false

			const selectedBoard = state.value.boards.find(
				(board) => board.id === action.payload
			)
			if (selectedBoard) selectedBoard.selected = true
		},
	},
})

export const { addBoard, selectBoard } = boardSlice.actions
export default boardSlice.reducer
