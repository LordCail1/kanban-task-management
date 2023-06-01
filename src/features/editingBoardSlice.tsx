import { PayloadAction, createSlice } from "@reduxjs/toolkit"





type InitialState = {
	value: BoardManagerPopupWindowEditFormData
}

const initialState: InitialState = {
	value: {
		board: {
			boardName: "",
			id: ""
		},
		columns: [],
	},
}

const editingBoardSlice = createSlice({
	name: "editingBoard_slice",
	initialState,
	reducers: {
		setEditableBoard: (
			state,
			action: PayloadAction<{ board: { boardName: string; id: string }; columns: Column[] }>
		) => {
			state.value.board.boardName = action.payload.board.boardName
			state.value.board.id = action.payload.board.id
			state.value.columns = []
			action.payload.columns.forEach((col) => {
				const column: ColumnEditFormData = { columnName: col.name, id: col.id }
				state.value.columns.push(column)
			})
		},
	},
})

export const { setEditableBoard } = editingBoardSlice.actions
export default editingBoardSlice.reducer
