/* eslint-disable no-mixed-spaces-and-tabs */
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux/reduxHooks"
import Column from "../Column/Column"
import EmptyBoardWarningContainer from "../EmptyBoardWarningContainer/EmptyBoardWarningContainer"
import NewColumnBtn from "../NewColumnBtn/NewColumnBtn"
import StyledMainContainer from "./MainContainer.styled"
import { setEditableBoard } from "../../features"

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
	const dispatch = useAppDispatch()



	// Runs when the component mounts or when the selected board changes
	useEffect(() => {
		setIsColumnsEmpty(filteredColumns.length < 1) // Sets whether the columns are empty or not based on the filteredColumn array
		if (selectedBoard) dispatch(setEditableBoard({boardName: selectedBoard.name, columns: filteredColumns})) // Dispatches the setEditableBoardName action with the selected board's name
	})

	// Filters the columns based on the selected board
	const filteredColumns: Column[] = []

	if (selectedBoard) {
		allColumns.forEach((column) => {
			selectedBoard.columns.forEach((boardColumn) => {
				if (boardColumn === column.id) filteredColumns.push(column)
			})
		})
	}

	return (
		<StyledMainContainer activated={sidebarActivated}>
			{filteredColumns
				? filteredColumns.map((column) => (
						<Column
							key={column.id}
							id={column.id}
						/>
				  ))
				: null}
			{filteredColumns.length < 1 ? <EmptyBoardWarningContainer /> : <NewColumnBtn />}
		</StyledMainContainer>
	)
}

export default Main
