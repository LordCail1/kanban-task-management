import styled from "styled-components"

const StyledMainContainer = styled.div<{ activated: boolean }>`
	flex-grow: 1;
	width: ${({ theme, activated }) =>
		activated
			? `calc(100% - ${theme.standards.desktopSidebarWidth})`
			: "100%"};
	position: relative;
	left: ${({ activated, theme }) =>
		activated ? `${theme.standards.desktopSidebarWidth}` : "0px"};
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
	@media screen and (max-width: ${({ theme }) => theme.mediaQueries.desktop}) {
		width: ${({ theme, activated }) =>
			activated
				? `calc(100% - ${theme.standards.tabletSidebarWidth})`
				: "100%"};
		left: ${({ activated, theme }) =>
			activated ? `${theme.standards.tabletSidebarWidth}` : "0px"};
	}
	@media screen and (max-width: ${({theme}) => theme.mediaQueries.tablet}) {
		left: 0;
		width: 100%;
	}
`

export default StyledMainContainer
