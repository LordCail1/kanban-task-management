import { PayloadAction, createSlice } from "@reduxjs/toolkit"


type InitialStateColumns = {
	columnName: string
	id: string
}
type InitialState = {
	value: {
		boardName: string
		columns: InitialStateColumns[]
	}
}


const initialState: InitialState = {
	value: {
		boardName: "",
		columns: [],
	},
}

const editingBoardSlice = createSlice({
	name: "editingBoard_slice",
	initialState,
	reducers: {
		setEditableBoard: (state, action: PayloadAction<{ boardName: string; columns: Column[] }>) => {
			state.value.boardName = action.payload.boardName
			state.value.columns = []
			action.payload.columns.forEach((col) => {
				const column: InitialStateColumns = { columnName: col.name, id: col.id }
				state.value.columns.push(column)
			})
		},
	},
})

export const { setEditableBoard } = editingBoardSlice.actions
export default editingBoardSlice.reducer
