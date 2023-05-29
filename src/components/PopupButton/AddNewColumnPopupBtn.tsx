import StyledAddNewColumnPopupBtn from "./AddNewColumnPopupBtn.styled"

const AddNewColumnPopupBtn = ({text, handleClick}: PopupBtn) => {
	return (
		<>
			<StyledAddNewColumnPopupBtn onClick={handleClick} type="button">
				{text}
			</StyledAddNewColumnPopupBtn>
		</>
	)
}

export default AddNewColumnPopupBtn
