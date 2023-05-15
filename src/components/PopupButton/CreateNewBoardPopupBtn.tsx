import StyledCreateNewBoardPopupBtn from "./CreateNewBoardPopupBtn.styled"

const CreateNewBoardPopupBtn = ({ text, handleClick }: PopupBtn) => {
	return (
		<>
			<StyledCreateNewBoardPopupBtn onClick={handleClick}>{text}</StyledCreateNewBoardPopupBtn>
		</>
	)
}

export default CreateNewBoardPopupBtn
