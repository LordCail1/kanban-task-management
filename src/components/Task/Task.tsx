import { openPopupWithId } from "../../features"
import { useAppDispatch, useAppSelector } from "../../hooks/redux/reduxHooks"
import StyledSubtaskCount from "./SubtaskCount.styled"
import StyledTask from "./Task.styled"
import StyledTaskTitle from "./TaskTitle.styled"

/**
 * This component is responsible for being an individual 'task'. Those tasks are listed in each column of a board. You can click on them to view them
 * and check out some of their subtasks. You can also change in which column they belong by changing their 'Current Status'
 * @param title the title of the task that you selected
 * @param numOfSubtasks The number of subtasks that this task contains. This is a number that is used for displaying purposes
 * @param id the id number of the task that is selected by the user
 */
const Task = ({ id, numOfSubtasks, task, title }: { id: string; numOfSubtasks: number; title: string; task: Task }) => {
	const dispatch = useAppDispatch()

	/**
	 * All the subtasks from the redux store
	 */
	const allSubtasks = useAppSelector((state) => state.subtaskSlice.value.subtasks)

	/**
	 * this list represents the IDs of all the subtasks that belong to this task
	 */
	const idList = new Set(task.subtasks)

	/**
	 * The complete data of the subtasks that belong to this task
	 */
	const currentSubtasks = allSubtasks.filter((subtask) => idList.has(subtask.id))

	/**
	 * the subtasks that belong to this task but that are also completed
	 */
	const currentCompletedSubtasks = currentSubtasks.filter((subtask) => subtask.isCompleted === true)

	return (
		<StyledTask onClick={() => dispatch(openPopupWithId({ HOCComponent: "TaskManagerViewerPopupWindow", editing: true, id: id }))}>
			<StyledTaskTitle>{title}</StyledTaskTitle>
			<StyledSubtaskCount>
				{currentCompletedSubtasks ? currentCompletedSubtasks.length : 0} of {numOfSubtasks} subtasks
			</StyledSubtaskCount>
		</StyledTask>
	)
}

export default Task
