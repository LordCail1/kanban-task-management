import styled, { css } from "styled-components"

const StyledBoardBtnIcon = styled.svg<{ selected?: boolean }>`
	margin-right: 16px;

	${({ selected }) =>
		selected &&
		css`
			color: white;
		`}
`

export default StyledBoardBtnIcon
