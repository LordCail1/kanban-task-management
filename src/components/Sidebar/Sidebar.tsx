import BoardList from "../BoardList/BoardList"
import KanbanLogo from "../KanbanLogo/KanbanLogo"
import NumOfBoardsDisplay from "../NumOfBoards/NumOfBoardsDisplay"
import StyledSidebar from "./Sidebar.styled"

const Sidebar = () => {





	return (
		<StyledSidebar>
			<KanbanLogo />
			<NumOfBoardsDisplay />
			<BoardList />
		</StyledSidebar>
	)
}

export default Sidebar
