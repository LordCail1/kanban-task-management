import styled from "styled-components"

const StyledTaskManagerViewerPopupSubtasksNum = styled.h3`
	color: ${({ theme }) => (theme.style === "dark" ? theme.colors.white : theme.colors.medium_grey)};
	font-size: 0.75rem;
	margin-bottom: 19px;
`

export default StyledTaskManagerViewerPopupSubtasksNum
