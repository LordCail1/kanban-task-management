import capitalizeAndTrim from "../../../utils/capitalizeAndTrim"

const BoardManagerPopupWindowEditerFormHook = (
	{ boardName: rawBoardName, columns: rawColumns }: BoardManagerPopupWindowCreateFormData,
	editingBoard: BoardManagerPopupWindowEditFormData
) => {

	// const structuredColumns: {name: string, id: string}[] 





	console.log("editingBoard", editingBoard)
	console.log("rawBoardName", rawBoardName)
	console.log("rawColumns", rawColumns)
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
