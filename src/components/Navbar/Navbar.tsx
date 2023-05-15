import KanbanLogo from "../KanbanLogo/KanbanLogo"
import StyledNavbar from "./Navbar.styled"
import StyledNavbarLogoContainer from "./NavbarLogoContainer.styled"
import StyledPlatformLaunch from "./NavbarPlatformLaunch.styled"

const Navbar = () => {
	return (
		<StyledNavbar>
			<StyledNavbarLogoContainer>
				<KanbanLogo />
			</StyledNavbarLogoContainer>
			<StyledPlatformLaunch>
				Platform Launch
			</StyledPlatformLaunch>
		</StyledNavbar>
	)
}

export default Navbar
