/* eslint-disable no-mixed-spaces-and-tabs */
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux/reduxHooks"
import Column from "../Column/Column"
import EmptyBoardWarningContainer from "../EmptyBoardWarningContainer/EmptyBoardWarningContainer/EmptyBoardWarningContainer"
import NewColumnBtn from "../NewColumnBtn/NewColumnBtn"
import StyledMainContainer from "./MainContainer.styled"
import { setEditableBoard } from "../../features"

/**
 * container holds the entire right section of the screen. This is what is
 * - underneath the navbar
 * - holding the columns
 * - on the right of the sidebar
 * @param setIsColumnsEmpty setter function for a 'useState' hook. This function is used to set the boolean
 * value of this state. This boolean value tells if there are any columns in the 'Main' section or not.
 */
const Main = ({ setIsColumnsEmpty }: { setIsColumnsEmpty: React.Dispatch<React.SetStateAction<boolean>> }) => {
	const dispatch = useAppDispatch()

	/**
	 * boolean value telling if the sidebar is active or not.
	 */
	const sidebarActivated = useAppSelector((state) => state.sidebarSlice.active)

	/**
	 * All the columns from the redux store
	 */
	const allColumns = useAppSelector((state) => state.columnsSlice.value.columns)

	/**P
	 * The board from the redux store that is active
	 */
	const selectedBoard = useAppSelector((state) => state.boardsSlice.value.boards.find((board) => board.selected === true))
	// Sets whether the columns are empty or not based on the filteredColumn array
	useEffect(() => {
		setIsColumnsEmpty(filteredColumns.length < 1)
	})

	//useEffect that makes sure to set the editable board when ever
	//the selected board changes
	useEffect(() => {
		if (selectedBoard) {
			dispatch(
				setEditableBoard({
					board: { name: selectedBoard.name, id: selectedBoard.id },
					columns: filteredColumns,
				})
			) // Dispatches the setEditableBoardName action with the selected board's name
		}
	}, [selectedBoard])

	// Filters the columns based on the selected board
	let filteredColumns: Column[] = []

	if (selectedBoard) {
		const allColumnIds: Record<string, Column> = {}
		//loop through each column and add it to the 'allColumnIds' object as a {[key]: value} pair
		allColumns.forEach((column) => {
			allColumnIds[column.id] = column
		})

		filteredColumns = selectedBoard.columns.map((columnId: string) => allColumnIds[columnId]).filter((column: Column) => Boolean(column))
	}

	return (
		<StyledMainContainer activated={sidebarActivated}>
			{filteredColumns
				? filteredColumns.map((column) => (
						<Column
							key={column.id}
							thisColumn={column}
						/>
				  ))
				: null}
			{filteredColumns.length < 1 ? <EmptyBoardWarningContainer /> : <NewColumnBtn />}
		</StyledMainContainer>
	)
}

export default Main
