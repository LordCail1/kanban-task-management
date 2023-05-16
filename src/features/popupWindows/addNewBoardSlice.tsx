import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { nanoid } from "nanoid"
import capitalizeWords from "../../utils/capitalizeWords"
import minimumLength from "../../utils/minimumLength"

const initialState: CreateNewBoardFields = {
	value: {
		createBoardName: {
			id: nanoid(10),
			name: "",
			valid: false,
		},
		createBoardColumnNames: [
			{
				id: nanoid(10),
				name: "",
				valid: false,
			},
		],
	},
}

const createNewBoardSlice = createSlice({
	name: "addNewBoard_slice",
	initialState,
	reducers: {
		setBoardName: (state, action: PayloadAction<string>) => {
			state.value.createBoardName.name = capitalizeWords(action.payload)
		},
		setColumnRowName: (
			state,
			action: PayloadAction<{ id: string; name: string }>
		) => {
			const column = state.value.createBoardColumnNames.find(
				(column) => column.id === action.payload.id
			)
			if (column) column.name = capitalizeWords(action.payload.name)
		},
		addNewColumnRow: (state) => {
			console.log("addColumnName")
			state.value.createBoardColumnNames.push({
				id: nanoid(),
				name: "",
				valid: false,
			})
		},
		removeColumnRow: (state, action: PayloadAction<string>) => {
			if (state.value.createBoardColumnNames.length === 1) return
			const newColumnRows = state.value.createBoardColumnNames.filter(
				(column) => column.id !== action.payload
			)
			state.value.createBoardColumnNames = newColumnRows
		},
		validateFields: (
			state,
			action: PayloadAction<CreateNewBoardFields>
		) => {
			const { name: boardName } = action.payload.value.createBoardName
			if (!minimumLength(boardName)) {
				state.value.createBoardName.valid = false
			} else {
				state.value.createBoardName.valid = true
			}
			action.payload.value.createBoardColumnNames.forEach((columnRow) => {
				if (!minimumLength(columnRow.name)) {
					//if word is too short
					const invalidColumn = state.value.createBoardColumnNames.find(
						(col) => col.id === columnRow.id
					)
					if (invalidColumn) {
						invalidColumn.valid = false
					}
				} else {
					//if it is right length
					const validColumn = state.value.createBoardColumnNames.find(
						(col) => col.id === columnRow.id
					)
					if (validColumn) {
						validColumn.valid = true
					}
				}
			})
		},
	},
})

export default createNewBoardSlice.reducer
export const {
	setBoardName,
	setColumnRowName,
	addNewColumnRow,
	removeColumnRow,
	validateFields,
} = createNewBoardSlice.actions
