import { useEffect } from "react"
import { useAppSelector } from "../../hooks/redux/reduxHooks"
import Column from "../Column/Column"
import EmptyBoardWarningContainer from "../EmptyBoardWarningContainer/EmptyBoardWarningContainer"
import NewColumnBtn from "../NewColumnBtn/NewColumnBtn"
import StyledMainContainer from "./MainContainer.styled"

const Main = ({
	setIsColumnsEmpty,
}: {
	setIsColumnsEmpty: React.Dispatch<React.SetStateAction<boolean>>
}) => {
	// Determines whether the sidebar is active or not
	const sidebarActivated = useAppSelector((state) => state.sidebarSlice.active)

	// Retrieves all columns from the Redux store
	const allColumns = useAppSelector((state) => state.columnsSlice.value.columns)
	// Retrieves the selected board from the Redux store
	const selectedBoard = useAppSelector((state) =>
		state.boardsSlice.value.boards.find((board) => board.selected === true)
	)


	useEffect(() => {
		setIsColumnsEmpty(filteredColumn.length < 1)
	})

	// Filters the columns based on the selected board
	const filteredColumn: Column[] = []

	if (selectedBoard) {
		allColumns.forEach((column) => {
			selectedBoard.columns.forEach((boardColumn) => {
				if (boardColumn === column.id) filteredColumn.push(column)
			})
		})
	}

	

	return (
		<StyledMainContainer activated={sidebarActivated}>
			{filteredColumn
				? filteredColumn.map((column) => (
						<Column
							key={column.id}
							id={column.id}
						/>
				  ))
				: null}
			{filteredColumn.length > 1 ? <NewColumnBtn /> : <EmptyBoardWarningContainer />}
		</StyledMainContainer>
	)
}

export default Main
