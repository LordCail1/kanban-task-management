import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { nanoid } from "nanoid"

type BoardColumn = {
	id: string
	name: string
}

type InitialState = {
	value: {
		boardName: string
		boardColumns: BoardColumn[]
	}
}

const initialState: InitialState = {
	value: {
		boardName: "",
		boardColumns: [
			{
				id: nanoid(),
				name: "",
			},
		],
	},
}

const addNewBoardSlice = createSlice({
	name: "addNewBoard_slice",
	initialState,
	reducers: {
		setBoardName: (state, action: PayloadAction<string>) => {
			state.value.boardName = action.payload
		},
		setColumnRowName: (state, action: PayloadAction<{id: string, name: string}>) => {
			const column = state.value.boardColumns.find(column => column.id === action.payload.id)
			if (column) column.name = action.payload.name
		},
		addNewColumnRow: (state) => {
			console.log("addColumnName")
			state.value.boardColumns.push({
				id: nanoid(),
				name: "",
			})
		},
		removeColumnRow: (state, action: PayloadAction<string>) => {
			if (state.value.boardColumns.length === 1) return
			const newColumnRows = state.value.boardColumns.filter(column => column.id !== action.payload)
			state.value.boardColumns = newColumnRows
		},
	},
})

export default addNewBoardSlice.reducer
export const {
	setBoardName,
	setColumnRowName,
	addNewColumnRow,
	removeColumnRow,
} = addNewBoardSlice.actions
