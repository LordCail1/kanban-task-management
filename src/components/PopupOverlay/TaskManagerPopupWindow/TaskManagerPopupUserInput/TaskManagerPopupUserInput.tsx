import StyledTaskManagerPopupUserInput from "./TaskManagerPopupUserInput.styled"
import StyledTaskManagerPopupUserInputListItemInputBox from "./TaskManagerPopupUserInputListItemInputBox/TaskManagerPopupUserInputListItemInputBox.styled"
import StyledTaskManagerUserInputTitle from "./TaskManagerPopupUserInputTitle/TaskManagerPopupUserInputTitle.styled"
const TaskManagerPopupUserInput = () => {
	return (
		<StyledTaskManagerPopupUserInput>
			<StyledTaskManagerUserInputTitle>Title</StyledTaskManagerUserInputTitle>
			<StyledTaskManagerPopupUserInputListItemInputBox valid={true} />
		</StyledTaskManagerPopupUserInput>
	)
}

export default TaskManagerPopupUserInput
