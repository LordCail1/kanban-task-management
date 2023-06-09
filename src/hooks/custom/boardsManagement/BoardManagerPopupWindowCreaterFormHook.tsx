import capitalizeAndTrim from "../../../utils/capitalizeAndTrim"
import randomColor from "randomcolor"


// This hook takes in form data for creating a new board and returns a structured board and columns.
const BoardManagerPopupWindowCreaterFormHook = ({
	board: { name: rawBoardName, id: boardId },
	columns: rawColumns,
}: BoardManagerPopupWindowFormData): {
	structuredBoard: Board
	structuredColumns: Column[]
} => {
	// Map the raw columns to a structured format
	const preStructuredColumns: Column[] = rawColumns.map((column: ColumnFormData): Column => {
		// Capitalize and trim the column name
		const columnName = capitalizeAndTrim(column.name)
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
	const structuredColumns: Column[] = removeEmptyOnes(preStructuredColumns)

	// Extract the IDs of the columns
	const columnIds: string[] = []
	structuredColumns.forEach((column: Column) => columnIds.push(column.id))

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
