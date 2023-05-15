import styled from "styled-components"
import StyledGeneralPopupBtn from "./GeneralPopupBtn.styled"

const StyledGeneralPopupBtnDark = styled(StyledGeneralPopupBtn)`
	background-color: ${({ theme }) => theme.colors.main_purple};
	color: ${({ theme }) => theme.colors.white};
	&:hover {
		background-color: ${({ theme }) => theme.colors.main_purple_hover};
	}
`

export default StyledGeneralPopupBtnDark
