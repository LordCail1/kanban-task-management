import { useAppSelector } from "../../../hooks/redux/reduxHooks"
import StyledTaskManagerPopupDescription from "./TaskManagerPopupDescription/TaskManagerPopupDescription.styled"
import TaskManagerPopupSubtaskList from "./TaskManagerPopupSubtaskList/TaskManagerPopupSubtaskList"
import StyledTaskManagerPopupSubtasksNum from "./TaskManagerPopupSubtasksNum/TaskManagerPopupSubtasksNum.styled"
import StyledTaskManagerPopupTitle from "./TaskManagerPopupTitle/TaskManagerPopupTitle.styled"
import StyledTaskManagerPopupWindow from "./TaskManagerPopupWindow.styled"



/**
 * The popup window that manages the information contained in a task
 * @param editing boolean value that represents if the task is in 'editing' mode or not
 * @param id id of the task that is selected
 * 
 */

const TaskManagerPopupWindow = ({ editing, id }: { editing: boolean; id?: string }) => {
	const task = useAppSelector((state) => state.tasksSlice.value.tasks.find((task) => task.id === id))

	return (
		<StyledTaskManagerPopupWindow>
			<StyledTaskManagerPopupTitle>{task?.title}</StyledTaskManagerPopupTitle>
			<StyledTaskManagerPopupDescription>{task?.description}</StyledTaskManagerPopupDescription>
			<TaskManagerPopupSubtaskList />
			<StyledTaskManagerPopupSubtasksNum>Subtasks (2 of {task?.subtasks.length})</StyledTaskManagerPopupSubtasksNum>
		</StyledTaskManagerPopupWindow>
	)
}

export default TaskManagerPopupWindow

//TaskManagerPopupSubtaskList
