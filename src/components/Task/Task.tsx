import StyledSubtaskCount from "./SubtaskCount.styled"
import StyledTask from "./Task.styled"
import StyledTaskTitle from "./TaskTitle.styled"

const Task = ({ title, numOfSubtasks, }: { title: string, numOfSubtasks: number }) => {
	return (
		<StyledTask>
			<StyledTaskTitle>{title}</StyledTaskTitle>
			<StyledSubtaskCount>0 of {numOfSubtasks} subtasks</StyledSubtaskCount>
		</StyledTask>
	)
}

export default Task
