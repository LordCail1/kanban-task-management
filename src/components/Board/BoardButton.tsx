import { board, boardSliceReducer } from "../../features"
import StyledBoardButton from "./BoardButton.styled"

const BoardButton:React.FC<board> = ({name, selected}) => {
	return <StyledBoardButton>{name}</StyledBoardButton>
}

export default BoardButton
