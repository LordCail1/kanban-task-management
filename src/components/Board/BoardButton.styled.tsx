import styled, { css } from "styled-components"
import { StyledGeneralBoardButton } from "../../styles/buttons"

const StyledBoardButton = styled(StyledGeneralBoardButton)<{
	selected: boolean}>`
	color: ${({ theme }) => theme.colors.medium_grey};

	${({ selected }) =>
		selected &&
		css`
			width: 92%;
			border-bottom-right-radius: 100px;
			border-top-right-radius: 100px;
			background-color: ${({ theme }) => theme.colors.main_purple};
			color: white;
		`}
`

export default StyledBoardButton
