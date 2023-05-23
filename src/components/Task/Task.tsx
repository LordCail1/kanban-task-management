import StyledTask from "./Task.styled"

const Task = ({ title }: { title: string }) => {
	return <StyledTask>{title}</StyledTask>
}

export default Task
