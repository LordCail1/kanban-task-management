import styled from "styled-components"
import StyledGeneralPopupWindow from "../../../styles/popups/GeneralPopupWindow.styled"

const StyledAddNewBoardPopupWindow = styled(StyledGeneralPopupWindow)`
	bottom: 50%;
	left: 50%;
	position: absolute;
	transform: translate(-50%, 50%);
	width: 480px;
	display: flex;
	flex-direction: column;
	border-radius: 6px;
	@media screen and (max-width: ${({ theme }) => theme.mediaQueries.tablet}) {
		width: 343px;
	}
`

export default StyledAddNewBoardPopupWindow
