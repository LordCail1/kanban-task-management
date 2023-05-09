import BoardList from "../BoardList/BoardList"
import CreateNewBoardBtn from "../CreateNewBoardBtn/CreateNewBoardBtn"
import KanbanLogo from "../KanbanLogo/KanbanLogo"
import NumOfBoardsDisplay from "../NumOfBoards/NumOfBoardsDisplay"
import StyledSidebar from "./Sidebar.styled"

const Sidebar = () => {





	return (
		<StyledSidebar>
			<KanbanLogo />
			<NumOfBoardsDisplay />
			<BoardList />
			<CreateNewBoardBtn/>
			
		</StyledSidebar>
	)
}

export default Sidebar
