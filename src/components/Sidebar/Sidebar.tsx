import BoardList from "../BoardList/BoardList"
import CreateNewBoardBtn from "../CreateNewBoardBtn/CreateNewBoardBtn"
import KanbanLogo from "../KanbanLogo/KanbanLogo"
import NumOfBoardsDisplay from "../NumOfBoards/NumOfBoardsDisplay"
import StyledSidebar from "./Sidebar.styled"
import ThemeControl from "../ThemeControl/ThemeControl"
import ToggleSidebar from "../ToggleSidebar/ToggleSidebar"
import { useAppSelector } from "../../hooks/redux/reduxHooks"

const Sidebar = () => {
	const sidebarActivated = useAppSelector(
		(state) => state.sidebarSlice.active
	)

	return (
		<>
			<StyledSidebar activated={sidebarActivated}>
				<KanbanLogo />
				<NumOfBoardsDisplay />
				<BoardList />
				<CreateNewBoardBtn />
				<ThemeControl></ThemeControl>
			</StyledSidebar>
			<ToggleSidebar />
		</>
	)
}

export default Sidebar
