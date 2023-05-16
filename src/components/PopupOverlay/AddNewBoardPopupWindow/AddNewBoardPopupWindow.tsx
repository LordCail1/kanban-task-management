import { addNewColumnRow, validateFields } from "../../../features/popupWindows/addNewBoardSlice"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux/reduxHooks"
import AddNewColumnPopupBtn from "../../PopupButton/AddNewColumnPopupBtn"
import CreateNewBoardPopupBtn from "../../PopupButton/CreateNewBoardPopupBtn"
import UserInputItemList from "../../UserInput/UserInputItemList"
import UserInputShort from "../../UserInput/UserInputShort"
import StyledAddNewBoardPopupTitle from "./AddNewBoardPopupTitle/AddNewBoardPopupTitle.styled"
import StyledAddNewBoardPopupWindow from "./AddNewBoardPopupWindow.styled"

const AddNewBoardPopupWindow = () => {
	const createBoardInfo = useAppSelector(state => state.addNewBoardSlice)
	const dispatch = useAppDispatch()

	const handleAddNewColumnRow = () => {
		console.log("added a new column")
		dispatch(addNewColumnRow())
	}

	const handleCreateNewBoard = () => {
		console.log("added new board")
	}

	return (
		<StyledAddNewBoardPopupWindow>
			<StyledAddNewBoardPopupTitle>
				Add New Board
			</StyledAddNewBoardPopupTitle>
			<UserInputShort
				title="Board Name"
				placeHolder="e.g Web Design"
			/>
			<UserInputItemList title="Board Columns" />

			<AddNewColumnPopupBtn
				text="+Add New Column"
				handleClick={handleAddNewColumnRow}
			/>
			<CreateNewBoardPopupBtn
				text="Create New Board"
				handleClick={handleCreateNewBoard}
			/>
		</StyledAddNewBoardPopupWindow>
	)
}

export default AddNewBoardPopupWindow
