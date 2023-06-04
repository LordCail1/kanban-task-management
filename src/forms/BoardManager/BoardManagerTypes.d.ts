
//form types for creating boards
////////////////////////////////////////////////////////////////////////////////////////////////////////

type BoardManagerPopupWindowCreateFormData = {
	board: {
		boardName: string
		id: string
	}
	columns: ColumnCreateFormData[]
}	

/**
 * Form structure for creating a new column in a board 
 * @params {columnName} name of the column that will be created
 */
type ColumnCreateFormData = {
	columnName: string
	id: string
}	





//form types for editing boards
////////////////////////////////////////////////////////////////////////////////////////////////////////


type BoardManagerPopupWindowEditFormData = {
	board: {
		boardName: string
		id: string
	}
	columns: ColumnEditFormData[]
}

type ColumnEditFormData = {
	columnName: string
	id: string
}








//Payload types
/////////////////////////////////////////////////////////////////////////////




//////////////////////////////

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
	deletedColumns: ColumnEditFormData[]
	newColumns: ColumnEditFormData[]
	columnsToUpdate: ColumnEditFormData[]
}



/**
 * individual boards
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



