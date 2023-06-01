import capitalizeAndTrim from "../../../utils/capitalizeAndTrim"

const BoardManagerPopupWindowEditerFormHook = (
	{
		board: { boardName: rawBoardName, id: boardId, },
		columns: rawColumns,
	}: BoardManagerPopupWindowCreateFormData,
	editingBoard: BoardManagerPopupWindowEditFormData
) => {
	const preStructuredColumns: { name: string; id: string }[] = rawColumns.map((column) => {
		return {
			name: capitalizeAndTrim(column.columnName),
			id: column.id,
		}
	})

	const removeEmptyOnes = (columnArray: { name: string; id: string }[]) => {
		return columnArray.filter((column) => column.name !== "")
	}
	const structuredColumns = removeEmptyOnes(preStructuredColumns)

	const structuredBoard: Board = {
		name: capitalizeAndTrim(rawBoardName),
		id: boardId,
		selected: true,
		columns: structuredColumns.map((column) => column.id),
	}

    // const deletedColumns: ColumnEditFormData = editingBoard.columns.filter(column => column.id !== )

	console.log('editingBoard', editingBoard)
    console.log("columns that were submited", rawColumns)
}

export default BoardManagerPopupWindowEditerFormHook

/**
 * Going to have to export 2 things:
 *
 * 1- structuredBoard
 * 2- structuredColumns
 *
 *
 *
 * type of structuredBoard:
 *
 * {
    name: string;
    id: string;
    selected: boolean;
    columns: string[];
}
 *
 *
 * dispatch(updateBoard(structuredBoard))
 * dispatch(updateColumns())
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
