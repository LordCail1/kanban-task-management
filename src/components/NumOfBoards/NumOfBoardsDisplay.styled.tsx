import styled, { css } from "styled-components"

const StyledNumOfBoardsDisplay = styled.span<MenuArea>`
	color: ${({ theme }) => theme.colors.medium_grey};
	font-size: 0.75rem;
	letter-spacing: 2.4px;
	display: inline-block;
	${({ menuArea }) => menuArea === "dropdown" && css`
		margin-left: 24px;
		margin-top: 16px;
	
	
	
	`};
	${({ menuArea }) =>
		menuArea === "sidebar" &&
		css`
			margin-bottom: 19px;
			margin-left: 34px;
			margin-top: 54px;
		`};
`

export default StyledNumOfBoardsDisplay
