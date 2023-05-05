import BoardButton from "../Board/BoardButton"
import KanbanLogo from "../KanbanLogo/KanbanLogo"
import NumOfBoardsDisplay from "../NumOfBoards/NumOfBoardsDisplay"
import StyledSidebar from "./Sidebar.styled"

const Sidebar = () => {
	return (
		<StyledSidebar>
			<KanbanLogo />
			<NumOfBoardsDisplay />
			<BoardButton>Platform Launch</BoardButton>
		</StyledSidebar>
	)
}

export default Sidebar
