import styled, { css } from "styled-components"
import { StyledGeneralBoardBtn } from "../../styles/buttons"

const StyledBoardBtn = styled(StyledGeneralBoardBtn)<{
	selected: boolean
}>`
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

export default StyledBoardBtn
