import { useAppSelector } from "../../hooks/redux/reduxHooks"
import StyledNumOfBoardsDisplay from "./NumOfBoardsDisplay.styled"

const NumOfBoardsDisplay = () => {
	const boards = useAppSelector((state) => state.boardsSlice.value.boards)
	const numberOfBoards = boards.length
	return (
		<StyledNumOfBoardsDisplay>
			ALL BOARDS ({numberOfBoards})
		</StyledNumOfBoardsDisplay>
	)
}

export default NumOfBoardsDisplay
