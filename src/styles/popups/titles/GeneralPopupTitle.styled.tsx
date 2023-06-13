import styled from "styled-components"

const StyledGeneralPopupTitle = styled.h2`
	letter-spacing: 1px;
	color: ${({ theme }) => (theme.style === "dark" ? theme.colors.white : theme.colors.black)};
`

export default StyledGeneralPopupTitle
