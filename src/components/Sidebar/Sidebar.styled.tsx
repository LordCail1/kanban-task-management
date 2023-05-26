import styled, { css } from "styled-components"

const StyledSidebar = styled.div<{ activated: boolean }>`
	background-color: ${({ theme }) =>
		theme.style === "dark" ? theme.colors.dark_grey : theme.colors.white};
	border-right: 1px solid
		${({ theme }) =>
			theme.style === "dark"
				? theme.colors.lines_dark
				: theme.colors.lines_light};
	bottom: 0;
	display: flex;
	flex-direction: column;
	position: fixed;
	top: 0;
	left: 0;
	transition: transform ease-in-out
			${({ theme }) => theme.transitionTimes.medium},
		left ease-in-out ${({ theme }) => theme.transitionTimes.medium};
	width: ${({ theme }) => theme.standards.desktopSidebarWidth};
	${({ activated }) =>
		!activated &&
		css`
			transform: translateX(-300px);
		`}
	@media screen and (max-width: ${({ theme }) => theme.mediaQueries.desktop}) {
		width: ${({ theme }) => theme.standards.tabletSidebarWidth};
	}
	@media screen and (max-width: ${({ theme }) => theme.mediaQueries.tablet}) {
		left: ${({ theme }) => `-${theme.standards.tabletSidebarWidth}`};
	}
`

export default StyledSidebar
