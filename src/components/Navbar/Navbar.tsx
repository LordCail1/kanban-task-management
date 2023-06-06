import { useAppSelector } from "../../hooks/redux/reduxHooks"
import DropdownArrow from "../Icon/DropDownArrow/DropdownArrow"
import KanbanLogo from "../KanbanLogo/KanbanLogo"
import AddNewTaskNavbarGroup from "../Task/AddNewTaskNavbarGroup/AddNewTaskNavbarGroup"
import StyledNavbar from "./Navbar.styled"
import StyledNavbarLogoContainer from "./NavbarLogoContainer.styled"
import StyledPlatformLaunch from "./NavbarPlatformLaunch.styled"

const Navbar = ({ isColumnsEmpty }: { isColumnsEmpty: boolean }) => {
	const selectedBoard = useAppSelector(state => state.boardsSlice.value.boards.find(board => board.selected === true))
	
	return (
		<StyledNavbar>
			<StyledNavbarLogoContainer>
				<KanbanLogo />
			</StyledNavbarLogoContainer>
			<StyledPlatformLaunch>{selectedBoard?.name}</StyledPlatformLaunch>
			<DropdownArrow />
			<AddNewTaskNavbarGroup isColumnsEmpty={isColumnsEmpty}/>
		</StyledNavbar>
	)
}

export default Navbar
