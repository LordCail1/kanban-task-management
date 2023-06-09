import styled from "styled-components"
import StyledGeneralPopupBtn from "./GeneralPopupBtn.styled"

const StyledGeneralPopupBtnLight = styled(StyledGeneralPopupBtn)`
	background-color: ${({ theme }) =>
		theme.style === "dark"
			? theme.colors.white
			: theme.colors.main_purple_hover2};
	color: ${({ theme }) => theme.colors.main_purple};
	&:hover {
		background-color: ${({ theme }) =>
			theme.style === "dark"
				? theme.colors.light_grey
				: theme.colors.main_purple_hover};
	}
`

export default StyledGeneralPopupBtnLight
