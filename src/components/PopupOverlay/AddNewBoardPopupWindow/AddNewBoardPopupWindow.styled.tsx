import styled from "styled-components"
import StyledGeneralPopupWindow from "../../../styles/Popup/GeneralPopupWindow.styled"

const StyledAddNewBoardPopupWindow = styled(StyledGeneralPopupWindow)`
	color: white;
	position: absolute;
	height: 429px;
	width: 480px;
	background-color: ${({ theme }) => theme.colors.dark_grey};
	left: 50%;
	bottom: 50%;
	transform: translate(-50%, 50%);
`

export default StyledAddNewBoardPopupWindow
