import StyledAddNewColumnPopupBtn from "./AddNewColumnPopupBtn.styled"

const AddNewColumnPopupBtn = ({text, handleClick}: PopupBtn) => {
	return (
		<>
			<StyledAddNewColumnPopupBtn onClick={handleClick}>
				{text}
			</StyledAddNewColumnPopupBtn>
		</>
	)
}

export default AddNewColumnPopupBtn
