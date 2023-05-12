import styled from "styled-components"
import StyledGeneralPopupWindow from "../../../styles/Popup/GeneralPopupWindow.styled"

const StyledAddNewBoardPopupWindow = styled(StyledGeneralPopupWindow)`
	bottom: 50%;
	height: 429px;
	left: 50%;
	position: absolute;
	transform: translate(-50%, 50%);
	width: 480px;
	@media screen and (max-width: ${({ theme }) => theme.mediaQueries.tablet}) {
		width: 343px;
	}
`

export default StyledAddNewBoardPopupWindow
