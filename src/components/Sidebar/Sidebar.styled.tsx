import styled, { css } from "styled-components"

const StyledSidebar = styled.div<{activated: boolean}>`
	background-color: ${({ theme }) => theme.style === "dark" ? theme.colors.dark_grey : theme.colors.white};
	border-right: 1px solid ${({theme}) => theme.style === 'dark' ? theme.colors.lines_dark : theme.colors.lines_light};
	bottom: 0;
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 0;
	transition: transform ease-in-out ${({theme}) => theme.transitionTimes.medium};
	width: 300px;
	${({activated}) => !activated && css`
	transform: translateX(-300px);
	`}
`

export default StyledSidebar
