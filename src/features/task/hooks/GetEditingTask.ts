import { useAppSelector } from "../../../hooks/redux/reduxHooks"

/**
 *
 * @param id the id of the task that is selected
 * @returns an object with two properties. Those are needed for having the information required to 'edit' a
 * task with all of the necessary fields in the form.
 */
const useGetEditingTask = (id?: string): { taskData: TaskManagerPopupWindowFormData; thisColumn: Column } | undefined => {
	const currentTask = useAppSelector((state) => state.tasksSlice.value.tasks.find((task) => task.id === id))
	const allSubtasks = useAppSelector((state) => state.subtaskSlice.value.subtasks)
	const allColumns = useAppSelector((state) => state.columnsSlice.value.columns)
	const selectedBoard = useAppSelector((state) => state.boardsSlice.value.boards.find((board) => board.selected === true))

	if (!currentTask || !id || !selectedBoard) return undefined

	/**
	 * The title of this task
	 */
	const taskTitle = currentTask.title

	/**
	 * The ID of this task
	 */
	const taskId = id

	/**
	 * The description of this task
	 */
	const taskDescription = currentTask.description

	let currentTaskSubtasks: Subtask[] = []
	let currentBoardColumns: Column[] = []

	currentTaskSubtasks = allSubtasks.filter((subtask) => currentTask.subtasks.includes(subtask.id))
	currentBoardColumns = allColumns.filter((column) => selectedBoard.columns.includes(column.id))

	const thisColumn: Column | undefined = currentBoardColumns.find((column: Column) => column.tasks.includes(id))
	if (!thisColumn) return undefined

	return {
		taskData: {
			task: {
				title: taskTitle,
				description: taskDescription,
				id: taskId,
			},
			subtasks: currentTaskSubtasks,
			columns: currentBoardColumns,
		},
		thisColumn,
	}
}

export default useGetEditingTask
