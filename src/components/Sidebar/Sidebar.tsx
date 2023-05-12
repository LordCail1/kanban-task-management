import { useAppDispatch } from "../../hooks/redux/reduxHooks"
import BoardList from "../BoardList/BoardList"
import CreateNewBoardBtn from "../CreateNewBoardBtn/CreateNewBoardBtn"
import KanbanLogo from "../KanbanLogo/KanbanLogo"
import NumOfBoardsDisplay from "../NumOfBoards/NumOfBoardsDisplay"
import StyledSidebar from "./Sidebar.styled"
import { changeThemeStyle } from "../../features"

const Sidebar = () => {
	const dispatch = useAppDispatch()





	return (
		<StyledSidebar>
			<KanbanLogo />
			<NumOfBoardsDisplay />
			<BoardList />
			<CreateNewBoardBtn/>
			<button onClick={() => dispatch(changeThemeStyle())}>Change Theme</button>
			
		</StyledSidebar>
	)
}

export default Sidebar
