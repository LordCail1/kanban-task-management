import styled from "styled-components"

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
	/* padding-left: ${({ activated }) => (activated ? "300px" : "0px")}; */
	display: flex;
	overflow-x: scroll;
`

export default StyledMainContainer
