import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux/reduxHooks"
import Task from "../Task/Task"
import StyledColumn from "./Column.styled"
import ColumnTitle from "./ColumnTitle/ColumnTitle"
import StyledEmptyColumnWarning from "./EmptyColumnWarning/EmptyColumnWarning.styled"
import { openPopup } from "../../features"

const Column = ({ thisColumn }: { thisColumn: Column }) => {
	const dispatch = useAppDispatch()

	/**
	 * getting all tasks from the redux store
	 */
	const allTasks = useAppSelector((state) => state.tasksSlice.value.tasks)

	/**
	 * managing the state of if the current column has any tasks or not
	 */
	const [columnIsEmpty, setColumnIsEmpty] = useState(false)

	/**
	 * This useEffect runs everytime the column's state has changed.
	 * It also makes sure to update the 'columnIsEmpty' state
	 */
	useEffect(() => {
		if (thisColumnTasks.length === 0) {
			setColumnIsEmpty(true)
		} else {
			setColumnIsEmpty(false)
		}
	}, [thisColumn])

	/**
	 * The tasks belonging to this column. First initialized to empty, then the value is calculated
	 */
	let thisColumnTasks: Task[] = []


	const allTasksIds: Record<string, Task> = {}

	/**
	 * looping through all the tasks, and assigning it's id as the key, and the actual task as the value
	 */
	allTasks.forEach((task) => {
		allTasksIds[task.id] = task
	})

	/**
	 * looping through all the tasks that belong to this column, and grabbing the task that matches the ids
	 */
	thisColumnTasks = thisColumn.tasks.map(taskId => allTasksIds[taskId]).filter(task => Boolean(task))

	return (
		<StyledColumn>
			<ColumnTitle
				name={thisColumn?.name}
				color={thisColumn?.color}
				quantity={thisColumnTasks.length}
			/>
			{columnIsEmpty ? (
				<StyledEmptyColumnWarning onClick={() => dispatch(openPopup({ HOCComponent: "TaskManagerPopupWindow", editing: false }))}>
					+ Add Task
				</StyledEmptyColumnWarning>
			) : (
				thisColumnTasks.map((task) => (
					<Task
						key={task.id}
						id={task.id}
						title={task.title}
						numOfSubtasks={task.subtasks.length}
						task={task}
					/>
				))
			)}
		</StyledColumn>
	)
}

export default Column
