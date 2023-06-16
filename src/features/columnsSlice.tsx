import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import randomColor from "randomcolor"




type InitialState = {
	value: {
		columns: Column[]
	}
}

const initialState: InitialState = {
	value: {
		columns: [
			{
				name: "Todo",
				id: "z8UHNIXCKV",
				color: "#23fcc6",
				tasks: ["m2HltGANwc", "INkx9CCoeX", "t-Z_mnC_gs", "zzsBAge26I"],
			},
			{
				name: "Doing",
				id: "nLgowJGVMG",
				color: "#e2afff",
				tasks: ["Xx4nI8E7gx", "wLvI5rzULs", "_GVTTYCfpY", "x3vwsAZgF7", "YQ5eGXNmaw", "bv1PgtRCIh"],
			},
			{
				name: "Done",
				id: "fxLoDxr5No",
				color: "#2cb259",
				tasks: ["TX1c_s04fa", "FLFIcNw00k", "D2QNHgiWI6", "Tbtv9x4ZWa", "YDkzGoB53X", "3jyh7xM48e", "opZz1bnspA"],
			},
			{
				name: "Todo",
				id: "W-LqSiiKad",
				color: "#1b23c4",
				tasks: ["NpqasglnII", "mrH7RocBFX", "m-SVH6K_-i"],
			},
			{
				name: "Doing",
				id: "3UiGitAZWn",
				color: "#30c956",
				tasks: [],
			},
			{
				name: "Done",
				id: "8YlbhLSPE8",
				color: "#c8ef75",
				tasks: [],
			},
			{
				name: "Now",
				id: "iT8JB5bqpt",
				color: "#a502e0",
				tasks: ["4RzlEt_QMj", "xrCLqcTcXz"],
			},
			{
				name: "Next",
				id: "0anclfaunM",
				color: "#64fc7b",
				tasks: [],
			},
			{
				name: "Later",
				id: "rDWYcYhbuO",
				color: "#69e2ef",
				tasks: [],
			},
		],
	},
}

const columnsSlice = createSlice({
	name: "columns_slice",
	initialState,
	reducers: {
		/**
		 * reducer to add a columns when user is on 'edit' mode
		 */
		addColumnsEdit: (state, action: PayloadAction<UpdatingColumnsType>) => {
			const { newColumns } = action.payload
			const newColumnArray: Column[] = newColumns.map((column: ColumnFormData) => {
				return {
					name: column.name,
					id: column.id,
					color: randomColor(),
					tasks: [],
				}
			})

			state.value.columns.push(...newColumnArray)
		},
		/**
		 * reducer to add a columns when user is creating a board opposed to if he was editing it
		 */
		addColumnsCreate: (state, action: PayloadAction<Column[]>) => {
			state.value.columns.push(...action.payload)
		},


		updateColumns: (state, action: PayloadAction<UpdatingColumnsType>) => {
			const { columnsToUpdate } = action.payload

			updateColumns(columnsToUpdate, state.value.columns)

			/**
			 * Updates the names of columns in the Redux store based on the data provided in the ColumnEditFormData array.
			 * @param colsFromPayloadToUpdate the columns that come from the payload that we need to update
			 * @param allColsFromState all of the columns from the redux store
			 */
			function updateColumns(colsFromPayloadToUpdate: ColumnFormData[], allColsFromState: Column[]) {
				for (let i = 0; i < allColsFromState.length; i++) {
					for (let j = 0; j < colsFromPayloadToUpdate.length; j++) {
						if (allColsFromState[i].id === colsFromPayloadToUpdate[j].id) {
							allColsFromState[i].name = colsFromPayloadToUpdate[j].name
						}
					}
				}
			}
		},
		/**
		 * takes in an array of columns that were deleted during editing
		 * @param action.payload.deletedColumns array of columns that were deleted during the editing
		 */
		deleteColumns: (state, action: PayloadAction<UpdatingColumnsType>) => {
			const { deletedColumns } = action.payload

			const deletedColumnIds = new Set(deletedColumns.map((column: ColumnFormData) => column.id))
			state.value.columns = state.value.columns.filter((column) => !deletedColumnIds.has(column.id))
		},

		/**
		 * this reducer removes the task from the column it was in, and pushes it into the new column that was chosen
		 * @param action.payload.thisColumn The column in which the task belonged to before dispatching
		 * @param action.payload.thisTaskId The ID number of the task that is concerned
		 * @param action.payload.newColumnId The ID number of the new column that has been selected
		 * @returns
		 */
		switchTaskFromColumn: (state, action: PayloadAction<{ thisColumn: Column; thisTaskId: string; newColumnId: string }>) => {
			const { newColumnId, thisColumn, thisTaskId } = action.payload

			removeTaskFromOldColumn(thisColumn, thisTaskId)
			addTaskToNewColumn(newColumnId, thisTaskId)

			function removeTaskFromOldColumn(thisColumn: Column, thisTaskId: string) {
				const thisColumnInState = state.value.columns.find((column) => column.id === thisColumn.id)
				if (thisColumnInState) {
					thisColumnInState.tasks = thisColumnInState.tasks.filter((id: string) => id !== thisTaskId)
				}
			}
			function addTaskToNewColumn(newColumnId: string, thisTaskId: string) {
				const newColumnInState = state.value.columns.find((column) => column.id === newColumnId)

				if (newColumnInState) {
					newColumnInState.tasks.push(thisTaskId)
				}
			}
		},
		/**
		 * This reducer updates the array that is in the 'tasks' property. It adds the ID of the task that
		 * has just been created 
		 * @param action.payload object containing the data from the form when it was submitted
		 */
		updateTasksArray: (state, action: PayloadAction<TaskManagerPopupWindowFormData>) => {
			const {task, column} = action.payload

			const thatColumn = state.value.columns.find((col: Column) => col.id === column.id)

			if (thatColumn) {
				thatColumn.tasks.push(task.id)
			}


		}
	},
})

export default columnsSlice.reducer
export const { addColumnsEdit, deleteColumns, updateColumns, addColumnsCreate, switchTaskFromColumn, updateTasksArray } = columnsSlice.actions
