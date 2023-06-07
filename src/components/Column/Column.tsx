import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux/reduxHooks"
import Task from "../Task/Task"
import StyledColumn from "./Column.styled"
import ColumnTitle from "./ColumnTitle/ColumnTitle"
import StyledEmptyColumnWarning from "./EmptyColumnWarning/EmptyColumnWarning.styled"
import { openPopup } from "../../features"

const Column = ({ id }: { id: string }) => {
	// Get the current column from the Redux store
	const thisColumn = useAppSelector((state) =>
		state.columnsSlice.value.columns.find((column) => column.id === id)
	)
	// Get all tasks from the Redux store
	const allTasks = useAppSelector((state) => state.tasksSlice.value.tasks)
	const [columnIsEmpty, setColumnIsEmpty] = useState<boolean>(false)
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (thisColumnTasks.length === 0) {
			setColumnIsEmpty(true)
		}
	}, [])

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
			{!columnIsEmpty ? (
				thisColumnTasks.map((task) => (
					<Task
						key={task.id}
						id={task.id}
						title={task.title}
						numOfSubtasks={task.subtasks.length}
						task={task}
					/>
				))
			) : (
				<StyledEmptyColumnWarning onClick={() => dispatch(openPopup({HOCComponent: "TaskManagerPopupWindow", editing: false}))}>+ Add Task</StyledEmptyColumnWarning>
			)}
		</StyledColumn>
	)
}

export default Column
