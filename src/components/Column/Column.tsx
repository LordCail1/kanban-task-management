import { useAppSelector } from "../../hooks/redux/reduxHooks"
import Task from "../Task/Task"
import StyledColumn from "./Column.styled"
import ColumnTitle from "./ColumnTitle/ColumnTitle"

const Column = ({ id }: { id: string }) => {
  // Get the current column from the Redux store
	const thisColumn = useAppSelector((state) =>
		state.columnsSlice.value.columns.find((column) => column.id === id)
	)

  // Get all tasks from the Redux store
	const allTasks = useAppSelector((state) => state.tasksSlice.value.tasks)

  // Filter tasks that belong to this column
	const thisColumnTasks: Task[] = []
	if (thisColumn) {
		allTasks.forEach((task) => {
			thisColumn.tasks.forEach((currentColumnTask) => {
				if (currentColumnTask === task.id) thisColumnTasks.push(task)
			})
		})
	}

  // Render the column with its title and tasks
	return (
		<StyledColumn>
			<ColumnTitle
				name={thisColumn?.name}
				color={thisColumn?.color}
        quantity={thisColumnTasks.length}
			/>
			{thisColumnTasks.map((task) => (
				<Task key={task.id} title={task.title} numOfSubtasks={task.subtasks.length}/>
			))}
		</StyledColumn>
	)
}

export default Column
