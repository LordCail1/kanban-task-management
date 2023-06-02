import capitalizeAndTrim from "../../../utils/capitalizeAndTrim"

const BoardManagerPopupWindowEditerFormHook = (
	{ board: { boardName: rawBoardName, id: boardId }, columns: rawColumns }: BoardManagerPopupWindowCreateFormData,
	editingBoard: BoardManagerPopupWindowEditFormData
) => {
	const preStructuredColumns: ColumnEditFormData[] = rawColumns.map((column) => {
		return {
			columnName: capitalizeAndTrim(column.columnName),
			id: column.id,
		}
	})

	const removeEmptyOnes = (columnArray: ColumnEditFormData[]) => {
		return columnArray.filter((column) => column.columnName !== "")
	}
	const structuredColumns = removeEmptyOnes(preStructuredColumns)

	const structuredBoard: Board = {
		name: capitalizeAndTrim(rawBoardName),
		id: boardId,
		selected: true,
		columns: structuredColumns.map((column) => column.id),
	}

	// const deletedColumns: ColumnEditFormData[] = []

	const deletedColumns: ColumnEditFormData[] = findDeletedColumns(editingBoard.columns, structuredColumns)
	const newColumns: ColumnEditFormData[] = findNewColumns(editingBoard.columns, structuredColumns)

	console.log("editingBoard", editingBoard)
	console.log("structured columns", structuredColumns)
	console.log("columns that were deleted", deletedColumns)
	console.log("those are the columns that have been added: ", newColumns)
}

export default BoardManagerPopupWindowEditerFormHook

/**
 *  Finds deleted columns between two arrays of columns.
 * @param {ColumnEditFormData[]} originalArr The original array of columns that was pulled from the selected form that is being edited
 * @param {ColumnEditFormData[]} newArr This is the current array of columns after the user has added or deleted some columns from the form
 * @returns {ColumnEditFormData[]} An array of columns that were deleted from the original array.
 */

function findDeletedColumns(originalArr: ColumnEditFormData[], newArr: ColumnEditFormData[]): ColumnEditFormData[] {
	const deletedColumns: ColumnEditFormData[] = []
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

function findNewColumns(originalArr: ColumnEditFormData[], newArr: ColumnEditFormData[]): ColumnEditFormData[] {
	const newColumns: ColumnEditFormData[] = []
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
