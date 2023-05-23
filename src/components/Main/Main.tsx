import { useAppSelector } from "../../hooks/redux/reduxHooks"
import Column from "../Column/Column"
import StyledMainContainer from "./MainContainer.styled"

const Main = () => {
	// Determines whether the sidebar is active or not
	const sidebarActivated = useAppSelector(
		(state) => state.sidebarSlice.active
	)
	
	// Retrieves all columns from the Redux store
	const allColumns = useAppSelector(
		(state) => state.columnsSlice.value.columns
	)
	// Retrieves the selected board from the Redux store
	const selectedBoard = useAppSelector((state) =>
		state.boardsSlice.value.boards.find((board) => board.selected === true)
	)

	// Filters the columns based on the selected board
	const selectedColumns: Column[] = []

	if (selectedBoard) {
		allColumns.forEach((column) => {
			selectedBoard.columns.forEach((boardColumn) => {
				if (boardColumn === column.id) selectedColumns.push(column)
			})
		})
	}

	return (
		<StyledMainContainer activated={sidebarActivated}>
			{selectedColumns &&
				selectedColumns.map((column) => <Column key={column.id} id={column.id} />)}
		</StyledMainContainer>
	)
}

export default Main
