import { useAppSelector } from "../../../hooks/redux/reduxHooks"
import StyledTaskManagerViewerPopupDescription from "./TaskManagerViewerPopupDescription/TaskManagerViewerPopupDescription.styled"
import StyledTaskManagerViewerPopupStatusDropdown from "./TaskManagerViewerPopupStatusDropdown/TaskManagerViewerPopupStatusDropdown.styled"
import StyledTaskManagerViewerPopupStatusTitle from "./TaskManagerViewerPopupStatusTitle/TaskManagerViewerPopupStatusTitle.styled"
import StyledTaskManagerViewerPopupSubtaskList from "./TaskManagerViewerPopupSubtaskList/TaskManagerViewerPopupSubtaskList.styled"
import TaskManagerViewerPopupSubtaskListItem from "./TaskManagerViewerPopupSubtaskList/TaskManagerViewerPopupSubtaskListItem/TaskManagerViewerPopupSubtaskListItem"
import StyledTaskManagerViewerPopupSubtasksNum from "./TaskManagerViewerPopupSubtasksNum/TaskManagerViewerPopupSubtasksNum.styled"
import StyledTaskManagerViewerPopupTitle from "./TaskManagerViewerPopupTitle/TaskManagerViewerPopupTitle.styled"
import StyledTaskManagerViewerPopupWindow from "./TaskManagerViewerPopupWindow.styled"

/**
 * The popup window that allows the user to view the information related to a task.
 * @param id id of the task that is selected
 */

const TaskManagerViewerPopupWindow = ({ id }: { id?: string }) => {
	//the task that is selected using the ID
	const thisTask = useAppSelector((state) => state.tasksSlice.value.tasks.find((task) => task.id === id))

	//all the subtasks in the redux store
	const allSubtasks = useAppSelector((state) => state.subtaskSlice.value.subtasks)

	//all the columns in the redux store
	const allColumns = useAppSelector((state) => state.columnsSlice.value.columns)

	//the currently selected board
	const selectedBoard = useAppSelector((state) => state.boardsSlice.value.boards.find((board) => board.selected === true))

	let listOfSubtasks: Subtask[] = []
	let listOfColumns: Column[] = []

	if (thisTask) {
		const setOfIds = new Set(thisTask.subtasks)
		listOfSubtasks = allSubtasks.filter((subtask) => setOfIds.has(subtask.id))
	}

	if (selectedBoard) {
		const setOfIds = new Set(selectedBoard.columns)
		listOfColumns = allColumns.filter((column) => setOfIds.has(column.id))
	}

	const amountOfCompletedSubtasks = listOfSubtasks.filter(subtask => subtask.isCompleted === true)

	return (
		<StyledTaskManagerViewerPopupWindow>
			<StyledTaskManagerViewerPopupTitle>{thisTask?.title}</StyledTaskManagerViewerPopupTitle>
			<StyledTaskManagerViewerPopupDescription>{thisTask?.description}</StyledTaskManagerViewerPopupDescription>
			<StyledTaskManagerViewerPopupSubtasksNum>Subtasks ({amountOfCompletedSubtasks.length} of {thisTask?.subtasks.length})</StyledTaskManagerViewerPopupSubtasksNum>
			<StyledTaskManagerViewerPopupSubtaskList>
				{listOfSubtasks.map((item) => (
					<TaskManagerViewerPopupSubtaskListItem key={item.id} {...item}/>
				))}
			</StyledTaskManagerViewerPopupSubtaskList>
			<StyledTaskManagerViewerPopupStatusTitle>Current Status</StyledTaskManagerViewerPopupStatusTitle>
			<StyledTaskManagerViewerPopupStatusDropdown>
				{listOfColumns.map((column) => (
					<option key={column.id}>{column.name}</option>
				))}
			</StyledTaskManagerViewerPopupStatusDropdown>
		</StyledTaskManagerViewerPopupWindow>
	)
}

export default TaskManagerViewerPopupWindow
