import UserInputItemList from "../../UserInput/UserInputItemList"
import UserInputShort from "../../UserInput/UserInputShort"
import StyledAddNewBoardPopupTitle from "./AddNewBoardPopupTitle/AddNewBoardPopupTitle.styled"
import StyledAddNewBoardPopupWindow from "./AddNewBoardPopupWindow.styled"

const AddNewBoardPopupWindow = () => {
	return (
		<StyledAddNewBoardPopupWindow>
			<StyledAddNewBoardPopupTitle>
				Add New Board
			</StyledAddNewBoardPopupTitle>
			<UserInputShort
				title="Board Name"
				placeHolder="e.g Web Design"
			/>
			<UserInputItemList title="Board Columns"/>
		</StyledAddNewBoardPopupWindow>
	)
}

export default AddNewBoardPopupWindow
