import styled from "styled-components"
import { theme } from "../../styles/Global.styled"

const StyledMainContainer = styled.div<{ activated: boolean }>`
	flex-grow: 1;
	width: ${({ theme, activated }) =>
		activated ? `calc(100% - ${theme.standards.sidebarWidth})` : "100%"};
	position: relative;
	left: ${({ activated }) => (activated ? "300px" : "0px")};
	background-color: ${({ theme }) =>
		theme.style === "dark"
			? theme.colors.very_dark_grey
			: theme.colors.light_grey};
	transition: left ease-in-out
			${({ theme }) => theme.transitionTimes.medium},
		width ease-in-out ${({ theme }) => theme.transitionTimes.medium};
	display: flex;
	overflow: scroll;
	::-webkit-scrollbar-track {
		background-color: ${({ theme }) =>
			theme.style === "dark"
				? theme.colors.dark_grey
				: theme.colors.white};
	}
	::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) =>
			theme.style === "dark"
				? theme.colors.white
				: theme.colors.main_purple};
	}
`

export default StyledMainContainer
