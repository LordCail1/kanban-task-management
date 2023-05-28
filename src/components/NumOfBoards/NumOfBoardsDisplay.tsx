import { useAppSelector } from "../../hooks/redux/reduxHooks"
import StyledNumOfBoardsDisplay from "./NumOfBoardsDisplay.styled"

const NumOfBoardsDisplay = ({ menuArea }: MenuArea) => {
	const boards = useAppSelector((state) => state.boardsSlice.value.boards)
	const numberOfBoards = boards.length
	return (
		<StyledNumOfBoardsDisplay menuArea={menuArea}>
			ALL BOARDS ({numberOfBoards})
		</StyledNumOfBoardsDisplay>
	)
}

export default NumOfBoardsDisplay
