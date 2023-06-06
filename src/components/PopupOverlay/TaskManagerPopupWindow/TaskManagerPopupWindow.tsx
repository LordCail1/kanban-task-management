import StyledTaskManagerPopupDescription from "./TaskManagerPopupDescription/TaskManagerPopupDescription.styled"
import TaskManagerPopupSubtaskList from "./TaskManagerPopupSubtaskList/TaskManagerPopupSubtaskList"
import StyledTaskManagerPopupSubtasksNum from "./TaskManagerPopupSubtasksNum/TaskManagerPopupSubtasksNum.styled"
import StyledTaskManagerPopupTitle from "./TaskManagerPopupTitle/TaskManagerPopupTitle.styled"
import StyledTaskManagerPopupWindow from "./TaskManagerPopupWindow.styled"

const TaskManagerPopupWindow = ({ editing }: { editing: boolean }) => {


	
	return (
		<StyledTaskManagerPopupWindow>
			<StyledTaskManagerPopupTitle>Hey</StyledTaskManagerPopupTitle>
			<StyledTaskManagerPopupDescription>
				We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks
				until we have a coherent proposition.
			</StyledTaskManagerPopupDescription>
			<TaskManagerPopupSubtaskList />
			<StyledTaskManagerPopupSubtasksNum>Subtasks (2 of 3)</StyledTaskManagerPopupSubtasksNum>
		</StyledTaskManagerPopupWindow>
	)
}

export default TaskManagerPopupWindow


//TaskManagerPopupSubtaskList