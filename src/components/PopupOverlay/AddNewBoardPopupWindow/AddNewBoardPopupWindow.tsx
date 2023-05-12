import UserInput from "../userInput/UserInput"
import StyledAddNewBoardPopupTitle from "./AddNewBoardPopupTitle/AddNewBoardPopupTitle.styled"
import StyledAddNewBoardPopupWindow from "./AddNewBoardPopupWindow.styled"

const AddNewBoardPopupWindow = () => {
	return (
		<StyledAddNewBoardPopupWindow>
			<StyledAddNewBoardPopupTitle>
				Add New Board
			</StyledAddNewBoardPopupTitle>
			<UserInput title="Board Name" />
		</StyledAddNewBoardPopupWindow>
	)
}

export default AddNewBoardPopupWindow
