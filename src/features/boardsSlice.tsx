import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type InitialState = {
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

const boardsSlice = createSlice({
	name: "boards_slice",
	initialState,
	reducers: {
		addBoard: (state, action: PayloadAction<Board>) => {
			const currentBoard = state.value.boards.find((board) => board.selected === true)
			if (currentBoard) {
				currentBoard.selected = false
			}
			state.value.boards.push(action.payload)
		},
		selectBoard: (state, action: PayloadAction<string>) => {
			const currentBoard = state.value.boards.find((board) => board.selected === true)
			if (currentBoard) currentBoard.selected = false

			const selectedBoard = state.value.boards.find((board) => board.id === action.payload)
			if (selectedBoard) selectedBoard.selected = true
		},
		updateBoard: (state, action: PayloadAction<Board>) => {
			const boardToUpdate = state.value.boards.find((board) => board.id === action.payload.id)
			if (boardToUpdate) {
				boardToUpdate.name = action.payload.name
				boardToUpdate.columns = action.payload.columns
			}
		},
		deleteBoard: (state, action: PayloadAction<{ id: string }>) => {
			const { id } = action.payload
			const thisBoard = state.value.boards.find((board: Board) => board.id === id)
			if (thisBoard) {
				thisBoard.selected = false
				state.value.boards = state.value.boards.filter((board: Board) => board.id !== id)
			}

			state.value.boards[0].selected = true
		},
	},
})

export const { addBoard, selectBoard, updateBoard, deleteBoard } = boardsSlice.actions
export default boardsSlice.reducer
