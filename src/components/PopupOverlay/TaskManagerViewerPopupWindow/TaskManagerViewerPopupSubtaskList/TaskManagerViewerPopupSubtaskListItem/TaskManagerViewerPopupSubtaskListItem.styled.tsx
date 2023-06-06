import styled from "styled-components"

const StyledTaskManagerViewerPopupSubtaskListItem = styled.li<{ checked: boolean }>`
	padding: 13px 12px;
	background-color: ${({ theme, checked }) => (checked ? theme.colors.very_dark_grey : `${theme.colors.main_purple}25`)};
	border-radius: 4px;
	margin-bottom: 8px;
	list-style: none;
	display: flex;
	cursor: pointer;
`

export default StyledTaskManagerViewerPopupSubtaskListItem
