import styled from "styled-components"

const StyledTaskManagerViewerPopupSubtaskLabel = styled.label<{ checked: boolean }>`
	padding: 0 13px;
	cursor: pointer;
	color: ${({ theme, checked }) => (checked ? `${theme.colors.white}50` : theme.colors.white)};
	text-decoration: ${({ checked }) => (checked ? "line-through" : "none")};
`

export default StyledTaskManagerViewerPopupSubtaskLabel
