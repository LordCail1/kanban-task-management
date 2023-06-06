import { openPopupWithId } from "../../features"
import { useAppDispatch } from "../../hooks/redux/reduxHooks"
import StyledSubtaskCount from "./SubtaskCount.styled"
import StyledTask from "./Task.styled"
import StyledTaskTitle from "./TaskTitle.styled"


/**
 * This component is responsible for being an individual 'task'. Those tasks are listed in each column of a board. You can click on them to edit them
 * @param title the title of the task that you selected
 * @param numOfSubtasks The number of subtasks that this task contains. This is a number that is used for displaying purposes
 * @param id the id number of the task that is selected by the user
 */
const Task = ({ title, numOfSubtasks, id }: { id: string; numOfSubtasks: number; title: string }) => {
	const dispatch = useAppDispatch()

	return (
		<StyledTask onClick={() => dispatch(openPopupWithId({ HOCComponent: "TaskManagerPopupWindow", editing: true, id: id }))}>
			<StyledTaskTitle>{title}</StyledTaskTitle>
			<StyledSubtaskCount>0 of {numOfSubtasks} subtasks</StyledSubtaskCount>
		</StyledTask>
	)
}

export default Task
