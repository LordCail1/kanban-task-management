import styled from "styled-components"

const StyledTaskManagerPopupStatusDropdownDisplay = styled.div`
	align-items: center;
	border-radius: 4px;
	border: 1px solid ${({ theme }) => (theme.style === "dark" ? theme.colors.main_purple : `${theme.colors.medium_grey}25`)};
	cursor: pointer;
	justify-content: space-between;
	padding: 10px;
	position: relative;
	background-color: transparent;
	color: white;
	display: flex;
	margin-bottom: 24px;
`

export default StyledTaskManagerPopupStatusDropdownDisplay
