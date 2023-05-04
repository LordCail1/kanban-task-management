import KanbanLogo from "../KanbanLogo/KanbanLogo"
import NumOfBoards from "../NumOfBoards/NumOfBoards"
import StyledSidebar from "./Sidebar.styled"

const Sidebar = () => {
	return (
		<StyledSidebar>
			<KanbanLogo />
			<NumOfBoards />
		</StyledSidebar>
	)
}

export default Sidebar
