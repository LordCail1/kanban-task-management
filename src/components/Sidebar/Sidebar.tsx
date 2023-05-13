import BoardList from "../BoardList/BoardList"
import CreateNewBoardBtn from "../CreateNewBoardBtn/CreateNewBoardBtn"
import KanbanLogo from "../KanbanLogo/KanbanLogo"
import NumOfBoardsDisplay from "../NumOfBoards/NumOfBoardsDisplay"
import StyledSidebar from "./Sidebar.styled"
import ThemeControl from "../ThemeControl/ThemeControl"
import ToggleSidebar from "../ToggleSidebar/ToggleSidebar"

const Sidebar = () => {

	return (
		<StyledSidebar>
			<KanbanLogo />
			<NumOfBoardsDisplay />
			<BoardList />
			<CreateNewBoardBtn />
			<ThemeControl></ThemeControl>
			<ToggleSidebar />
		</StyledSidebar>
	)
}

export default Sidebar
