import styled, { css } from "styled-components"
import { StyledGeneralBoardBtn } from "../../styles/buttons"

const StyledToggleSidebar = styled(StyledGeneralBoardBtn)<{
	activated: boolean
}>`
	bottom: 32px;
	color: ${({ theme }) => theme.colors.medium_grey};
	position: absolute;
	min-height: 45px;
	padding-left: 52px;
	transition: all ease-in-out ${({ theme }) => theme.transitionTimes.fast};
	width: 275px;
	left: 0;
	${({ activated }) =>
		!activated &&
		css`
			background-color: ${({ theme }) => theme.colors.main_purple};
			padding: 14px 0;
			width: 50px;
			&:hover {
				background-color: ${({ theme }) => theme.colors.main_purple_hover};
			}
		`}
	&:hover {
		color: ${({ theme }) => theme.colors.main_purple};
	}
	@media screen and (max-width: ${({ theme }) => theme.mediaQueries.desktop}) {
		width: 240px;
		${({ activated }) =>
			!activated &&
			css`
				background-color: ${({ theme }) => theme.colors.main_purple};
				padding: 14px 0;
				width: 50px;
				&:hover {
					background-color: ${({ theme }) =>
						theme.colors.main_purple_hover};
				}
			`}
	}
	@media screen and (max-width: ${({ theme }) => theme.mediaQueries.tablet}) {
		left: ${({ theme }) => `-${theme.standards.tabletSidebarWidth}`};
	}
`

export default StyledToggleSidebar
