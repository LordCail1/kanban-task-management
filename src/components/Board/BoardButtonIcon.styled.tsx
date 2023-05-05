import styled, { css } from "styled-components"

const StyledBoardButtonIcon = styled.svg<{ selected: boolean }>`
	margin-right: 16px;
	
	${({ selected }) =>
		selected &&
		css`
			color: white;
		`}
`

export default StyledBoardButtonIcon
