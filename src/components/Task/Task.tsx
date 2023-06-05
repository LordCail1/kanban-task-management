import { openPopup } from "../../features"
import { useAppDispatch } from "../../hooks/redux/reduxHooks"
import StyledSubtaskCount from "./SubtaskCount.styled"
import StyledTask from "./Task.styled"
import StyledTaskTitle from "./TaskTitle.styled"

const Task = ({ title, numOfSubtasks, }: { title: string, numOfSubtasks: number }) => {
	const dispatch = useAppDispatch()

	return (
		<StyledTask onClick={() => dispatch(openPopup({HOCComponent: "TaskManagerPopupWindow", editing: true}))}>
			<StyledTaskTitle>{title}</StyledTaskTitle>
			<StyledSubtaskCount>0 of {numOfSubtasks} subtasks</StyledSubtaskCount>
		</StyledTask>
	)
}

export default Task
