


/**
 * object representing the structure needed for managing boards and their columns
 * @param board.boardName name of the board 
 * @param board.id id of the board
 * @param columns array of columns 
 */
type BoardManagerPopupWindowFormData = {
	board: {
		boardName: string
		id: string
	}
	columns: ColumnFormData[]
}

/**
 * Form structure for creating a new column in a board
 * @param columnName name of the column that will be created
 */
type ColumnFormData = {
	columnName: string
	id: string
}



//////////////////////////////

/**
 * an object that provides the proper structure to send the information to a redux reducer. what is inside this object can be used as payload for updating the redux store
 * @param columnsInfo object containing the most used properties needed to update, delete or create columns when editing a form
 * @param boardInfo board object used to create or update a board in the redux store
 */
type BoardManagerEditingPayload = {
	columnsInfo: UpdatingColumnsType
	boardInfo: Board
}

/**
 * object containing the most used properties needed to update, delete or create columns when editing a form
 * @param deletedColumns array of columns that were deleted during the editing
 * @param newColumns array of columns that were created during the editing
 * @param columnsToUpdate array of columns that were there before the editing started, and are still there. this array
 * shows the list of columsn that simply need to be edited
 */
type UpdatingColumnsType = {
	deletedColumns: ColumnFormData[]
	newColumns: ColumnFormData[]
	columnsToUpdate: ColumnFormData[]
}

/**
 * structure of the boards in the redux store
 * @param name name the board
 * @param id id of the board
 * @param selected this is the currently selected board
 * @param columns IDs of all the columns belonging to this board
 */
type Board = {
	name: string
	id: string
	selected: boolean
	columns: string[]
}
