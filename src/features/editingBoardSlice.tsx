import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type InitialState = {
	value: {
		boardName: string
		columnNames: ColumnFormData[]
	}
}

const initialState: InitialState = {
	value: {
		boardName: "",
		columnNames: [],
	},
}

const editingBoardSlice = createSlice({
	name: "editingBoard_slice",
	initialState,
	reducers: {
		setEditableBoard: (state, action: PayloadAction<{ boardName: string; columns: Column[] }>) => {
			state.value.boardName = action.payload.boardName
			state.value.columnNames = []
			action.payload.columns.forEach((col) => {
				const column: ColumnFormData = { columnName: col.name }
				state.value.columnNames.push(column)
			})
		},
	},
})

export const { setEditableBoard } = editingBoardSlice.actions
export default editingBoardSlice.reducer
