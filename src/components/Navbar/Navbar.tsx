import DropdownArrow from "../Icon/DropDownArrow/DropdownArrow"
import KanbanLogo from "../KanbanLogo/KanbanLogo"
import AddNewTaskNavbarGroup from "../Task/AddNewTaskNavbarGroup/AddNewTaskNavbarGroup"
import StyledNavbar from "./Navbar.styled"
import StyledNavbarLogoContainer from "./NavbarLogoContainer.styled"
import StyledPlatformLaunch from "./NavbarPlatformLaunch.styled"

const Navbar = () => {
	return (
		<StyledNavbar>
			<StyledNavbarLogoContainer>
				<KanbanLogo />
			</StyledNavbarLogoContainer>
			<StyledPlatformLaunch>Platform Launch</StyledPlatformLaunch>
			<DropdownArrow />
			<AddNewTaskNavbarGroup />
		</StyledNavbar>
	)
}

export default Navbar
