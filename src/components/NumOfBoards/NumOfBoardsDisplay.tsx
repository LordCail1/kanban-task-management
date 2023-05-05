import { useAppSelector } from "../../hooks/reduxHooks"
import StyledNumOfBoardsDisplay from "./NumOfBoardsDisplay.styled"

const NumOfBoardsDisplay = () => {
	const boards = useAppSelector((state) => state.boardSlice.value.boards)
	const numberOfBoards = boards.length
	return (
		<StyledNumOfBoardsDisplay>
			ALL BOARDS ({numberOfBoards})
		</StyledNumOfBoardsDisplay>
	)
}

export default NumOfBoardsDisplay
