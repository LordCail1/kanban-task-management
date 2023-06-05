import styled from "styled-components"
import StyledGeneralPopupWindow from "../../../styles/popups/GeneralPopupWindow.styled"


/**
 * form container for board management
 */
const StyledBoardManagerPopupWindow = styled(StyledGeneralPopupWindow)`
	border-radius: 6px;
	display: flex;
	flex-direction: column;
	width: 480px;
	@media screen and (max-width: ${({ theme }) => theme.mediaQueries.tablet}) {
		width: 343px;
	}
`

export default StyledBoardManagerPopupWindow
