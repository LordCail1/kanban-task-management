import { useAppSelector } from "../../hooks/redux/reduxHooks"
import Task from "../Task/Task"
import StyledColumn from "./Column.styled"
import ColumnTitle from "./ColumnTitle/ColumnTitle"
import randomColor from "randomcolor"

const Column = ({ id }: { id: string }) => {
	const thisColumn = useAppSelector((state) =>
		state.columnsSlice.value.columns.find((column) => column.id === id)
	)
	const allTasks = useAppSelector((state) => state.tasksSlice.value.tasks)
	const thisColumnTasks: Task[] = []

	if (thisColumn) {
		allTasks.forEach((task) => {
			thisColumn.tasks.forEach((currentColumnTask) => {
				if (currentColumnTask === task.id) thisColumnTasks.push(task)
			})
		})
	}

  if (thisColumnTasks.length === 0) return null

	return (
		<StyledColumn>
			<ColumnTitle
				name={thisColumn?.name}
				color={randomColor()}
        quantity={thisColumnTasks.length}
			/>
			{thisColumnTasks.map((task) => (
				<Task key={task.id} title={task.title}/>
			))}
		</StyledColumn>
	)
}

export default Column
