import capitalizeAndTrim from "../../../utils/capitalizeAndTrim"
import randomColor from "randomcolor"

// This hook takes in form data for creating a new board and returns a structured board and columns.
const BoardManagerPopupWindowCreaterFormHook = ({
	board: { boardName: rawBoardName, id: boardId },
	columns: rawColumns,
}: BoardManagerPopupWindowCreateFormData): {
	structuredBoard: Board
	structuredColumns: Column[]
} => {
	// Map the raw columns to a structured format
	const preStructuredColumns: Column[] = rawColumns.map((column): Column => {
		// Capitalize and trim the column name
		const columnName = capitalizeAndTrim(column.columnName)
		// Generate a random color for the column
		return {
			name: columnName,
			id: column.id,
			color: randomColor(),
			tasks: [],
		}
	})

	// Remove any empty columns
	const removeEmptyOnes = (columnArray: Column[]) => {
		return columnArray.filter((column) => column.name !== "")
	}
	const structuredColumns = removeEmptyOnes(preStructuredColumns)

	// Extract the IDs of the columns
	const columnIds: string[] = []
	structuredColumns.forEach((column) => columnIds.push(column.id))

	//took the borad name and capitalized the first letter
	const finalBoardName = capitalizeAndTrim(rawBoardName)
	const structuredBoard: Board = {
		name: finalBoardName,
		id: boardId,
		selected: true,
		columns: columnIds,
	}
	return {
		structuredBoard,
		structuredColumns,
	}
}

export default BoardManagerPopupWindowCreaterFormHook
