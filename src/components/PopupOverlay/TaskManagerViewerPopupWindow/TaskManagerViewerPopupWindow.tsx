import { useAppSelector } from "../../../hooks/redux/reduxHooks"
import StyledTaskManagerViewerPopupDescription from "./TaskManagerViewerPopupDescription/TaskManagerViewerPopupDescription.styled"
import TaskManagerViewerPopupSubtaskList from "./TaskManagerViewerPopupSubtaskList/TaskManagerViewerPopupSubtaskList"
import StyledTaskManagerViewerPopupSubtasksNum from "./TaskManagerViewerPopupSubtasksNum/TaskManagerViewerPopupSubtasksNum.styled"
import StyledTaskManagerViewerPopupTitle from "./TaskManagerViewerPopupTitle/TaskManagerViewerPopupTitle.styled"
import StyledTaskManagerViewerPopupWindow from "./TaskManagerViewerPopupWindow.styled"

/**
 * The popup window that allows the user to view the information related to a task. 
 * @param id id of the task that is selected
 */

const TaskManagerViewerPopupWindow = ({ id }: { id?: string }) => {
	const task = useAppSelector((state) => state.tasksSlice.value.tasks.find((task) => task.id === id))

	return (
		<StyledTaskManagerViewerPopupWindow>
			<StyledTaskManagerViewerPopupTitle>{task?.title}</StyledTaskManagerViewerPopupTitle>
			<StyledTaskManagerViewerPopupDescription>{task?.description}</StyledTaskManagerViewerPopupDescription>
			<TaskManagerViewerPopupSubtaskList />
			<StyledTaskManagerViewerPopupSubtasksNum>Subtasks (2 of {task?.subtasks.length})</StyledTaskManagerViewerPopupSubtasksNum>
		</StyledTaskManagerViewerPopupWindow>
	)
}

export default TaskManagerViewerPopupWindow

//TaskManagerPopupSubtaskList
