import StyledTaskManagerPopupTitle from "./TaskManagerPopupTitle/TaskManagerPopupTitle.styled"
import TaskManagementPopupUserInput from "./TaskManagerPopupUserInput/TaskManagerPopupUserInput"
import StyledTaskManagerPopupWindow from "./TaskManagerPopupWindow.styled"

const TaskManagerPopupWindow = () => {
	return (
		<StyledTaskManagerPopupWindow>
			<StyledTaskManagerPopupTitle>Add New Task</StyledTaskManagerPopupTitle>
			<TaskManagementPopupUserInput
				
			/>
		</StyledTaskManagerPopupWindow>
	)
}

export default TaskManagerPopupWindow
