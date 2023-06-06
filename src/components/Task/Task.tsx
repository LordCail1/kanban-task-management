import { openPopupWithId } from "../../features"
import { useAppDispatch } from "../../hooks/redux/reduxHooks"
import StyledSubtaskCount from "./SubtaskCount.styled"
import StyledTask from "./Task.styled"
import StyledTaskTitle from "./TaskTitle.styled"

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
