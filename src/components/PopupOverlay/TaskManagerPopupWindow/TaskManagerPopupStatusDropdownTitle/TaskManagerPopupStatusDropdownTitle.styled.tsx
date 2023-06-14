import styled from "styled-components"

const StyledTaskManagerPopupStatusDropdownTitle = styled.h3`
	margin-top: 24px;
	color: ${({ theme }) => (theme.style === "dark" ? theme.colors.white : theme.colors.medium_grey)};
	font-size: 0.75rem;
	margin-bottom: 11px;
`

export default StyledTaskManagerPopupStatusDropdownTitle
