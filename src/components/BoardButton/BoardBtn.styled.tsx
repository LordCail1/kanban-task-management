import styled, { css } from "styled-components"
import { StyledGeneralBoardBtn } from "../../styles/buttons"

const StyledBoardBtn = styled(StyledGeneralBoardBtn)<{
	selected: boolean
}>`
	color: ${({ theme }) => theme.colors.medium_grey};
	width: 92%;
	border-bottom-right-radius: 100px;
	border-top-right-radius: 100px;
	transition: background-color 100ms ease-in-out;
	${({ selected }) =>
		!selected &&
		css`
			&:hover {
				background-color: ${({ theme }) =>
					theme.style === "dark"
						? theme.colors.white
						: theme.colors.main_purple_hover2};
			}
		`}
	${({ selected }) =>
		selected &&
		css`
			border-bottom-right-radius: 100px;
			border-top-right-radius: 100px;
			background-color: ${({ theme }) => theme.colors.main_purple};
			color: white;
		`}
`

export default StyledBoardBtn
