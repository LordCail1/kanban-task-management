import styled from "styled-components"
import { theme } from "../../styles/Global"

const StyledSidebar = styled.div<{ themeColor: 'dark' | 'light' }>`
	width: 300px;

	border-right: 1px solid ${({ theme }) => theme.colors.lines_dark};
	background-color: ${({ themeColor, theme }) =>
		themeColor === "dark" ? theme.colors.dark_grey : theme.colors.white};
`

export default StyledSidebar
