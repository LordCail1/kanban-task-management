import styled from "styled-components"

const StyledColumnTitleColorCircle = styled.div<{
	itemColor: string | undefined
}>`
	width: 15px;
	height: 15px;
	border-radius: 200px;
	background-color: ${({ itemColor }) => itemColor};
	margin-right: 12px;
`

export default StyledColumnTitleColorCircle
