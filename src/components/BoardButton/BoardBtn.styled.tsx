import styled, { css } from "styled-components"
import { StyledGeneralBoardBtn } from "../../styles/buttons"

const StyledBoardBtn = styled(StyledGeneralBoardBtn)<
	{
		selected: boolean
	} & MenuArea
>`
	color: ${({ theme }) => theme.colors.medium_grey};
		ease-in-out;
	${({ selected }) =>
		!selected &&
		css`
			&:hover {
				background-color: ${({ theme }) =>
					theme.style === "dark" ? theme.colors.white : theme.colors.main_purple_hover2};
			}
		`}
	${({ selected }) =>
		selected &&
		css`
			border-bottom-right-radius: 100px;
			border-top-right-radius: 100px;
			background-color: ${({ theme }) => theme.colors.main_purple};
			color: white;
			&:hover {
				background-color: ${({ theme }) => theme.colors.main_purple};
			}
		`}

	${({ menuArea }) => menuArea === "dropdown" && css``}
	${({ menuArea }) => menuArea === "sidebar" && css``}
`

export default StyledBoardBtn
