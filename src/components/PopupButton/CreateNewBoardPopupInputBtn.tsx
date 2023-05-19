import StyledCreateNewBoardPopupInputBtn from "./CreateNewBoardPopupInputBtn.styled"

const CreateNewBoardPopupInputBtn = ({ text, handleClick }: PopupBtn) => {
	return (
		<>
			<StyledCreateNewBoardPopupInputBtn
				onClick={handleClick}
				type="submit"
				value={text}
			/>
		</>
	)
}

export default CreateNewBoardPopupInputBtn
