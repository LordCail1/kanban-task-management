import capitalizeAndTrim from "../../../utils/capitalizeAndTrim"

/**
 * A custom hook for managing the form data of the Board Manager Popup Window Editor.
 * @param board - Board data object
 * @param board.boardName - name of the board
 * @param board.id - id of the board
 * @param columns - array of columns coming from the form
 * @returns an object that provides the proper structure to send the information to a redux reducer. what is inside this object
 * can be used as payload for updating the redux store
 */
const BoardManagerPopupWindowEditerFormHook = (
	{ board: { boardName: rawBoardName, id: boardId }, columns: rawColumns }: BoardManagerPopupWindowFormData,
	editingBoard: BoardManagerPopupWindowFormData
): BoardManagerEditingPayload => {
	const preStructuredColumns: ColumnFormData[] = rawColumns.map((column) => ({
		columnName: capitalizeAndTrim(column.columnName),
		id: column.id,
	}))

	/**
	 *
	 * @param columnArray array of columns
	 * @returns array of columns that are not empty
	 */
	const removeEmptyOnes = (columnArray: ColumnFormData[]) => columnArray.filter((column) => column.columnName !== "")

	const structuredColumns: ColumnFormData[] = removeEmptyOnes(preStructuredColumns)

	const structuredBoard: Board = {
		name: capitalizeAndTrim(rawBoardName),
		id: boardId,
		selected: true,
		columns: structuredColumns.map((column) => column.id),
	}

	const deletedColumns: ColumnFormData[] = findDeletedColumns(editingBoard.columns, structuredColumns)
	const newColumns: ColumnFormData[] = findNewColumns(editingBoard.columns, structuredColumns)
	const columnsToUpdate: ColumnFormData[] = findColumnsToUpdate(structuredColumns, newColumns)

	return {
		boardInfo: structuredBoard,
		columnsInfo: {
			columnsToUpdate,
			deletedColumns,
			newColumns,
		},
	}
}

export default BoardManagerPopupWindowEditerFormHook

/**
 *  Finds deleted columns between two arrays of columns.
 * @param {ColumnFormData[]} originalArr The original array of columns that was pulled from the selected form that is being edited
 * @param {ColumnFormData[]} newArr This is the current array of columns after the user has added or deleted some columns from the form
 * @returns {ColumnFormData[]} An array of columns that were deleted from the original array.
 */
function findDeletedColumns(originalArr: ColumnFormData[], newArr: ColumnFormData[]): ColumnFormData[] {
	const deletedColumns: ColumnFormData[] = []
	for (let i = 0; i < originalArr.length; i++) {
		let found = false
		for (let j = 0; j < newArr.length; j++) {
			if (originalArr[i].id === newArr[j].id) {
				found = true
				break
			}
		}
		if (found === false) deletedColumns.push(originalArr[i])
	}
	return deletedColumns
}
/**
 * Finds new columns between two arrays of columns.
 * @param {ColumnFormData[]} originalArr The original array of columns that was pulled from the selected form that is being edited
 * @param {ColumnFormData[]} newArr This is the current array of columns after the user has added or deleted some columns from the form
 * @returns {ColumnFormData[]} An array of columns that were added to the new array.
 */
function findNewColumns(originalArr: ColumnFormData[], newArr: ColumnFormData[]): ColumnFormData[] {
	const newColumns: ColumnFormData[] = []
	for (let i = 0; i < newArr.length; i++) {
		let found = false
		for (let j = 0; j < originalArr.length; j++) {
			if (newArr[i].id === originalArr[j].id) {
				found = true
				break
			}
		}
		if (found === false) newColumns.push(newArr[i])
	}
	return newColumns
}

/**
 * Finds columns that need to be updated between two arrays of columns.
 * @param {ColumnFormData[]} structuredCols This is the current array of columns after the user has added or deleted some columns from the form
 * @param {ColumnFormData[]} newCols This is the columns that the user has added while editing
 * @returns {ColumnFormData[]} An array of columns that need to be updated. those are the ones that have not been added, but simply saved again or modified.
 */
function findColumnsToUpdate(structuredCols: ColumnFormData[], newCols: ColumnFormData[]): ColumnFormData[] {
	const columnsToUpdate: ColumnFormData[] = []

	for (let i = 0; i < structuredCols.length; i++) {
		let isColToUpdate = true
		for (let j = 0; j < newCols.length; j++) {
			if (structuredCols[i].id === newCols[j].id) {
				isColToUpdate = false
				break
			}
		}
		if (isColToUpdate) columnsToUpdate.push(structuredCols[i])
	}

	return columnsToUpdate
}
