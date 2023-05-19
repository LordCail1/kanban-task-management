import styled from "styled-components"
import StyledGeneralPopupInput from "./GeneralPopupInputBtn.styled"

const StyledGeneralPopupInputBtnDark = styled(StyledGeneralPopupInput)`
	background-color: ${({ theme }) => theme.colors.main_purple};
	color: ${({ theme }) => theme.colors.white};
	&:hover {
		background-color: ${({ theme }) => theme.colors.main_purple_hover};
	}
`

export default StyledGeneralPopupInputBtnDark
