import { openPopup } from "../../../features"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux/reduxHooks"
import { useState } from "react"
import TaskManagerViewerPopupStatusDropdown from "./TaskManagerViewerPopupStatusDropdown/TaskManagerViewerPopupStatusDropdown"
import KebabMenu from "../../KebabMenu/KebabMenu"
import StyledTaskManagerViewerPopupDescription from "./TaskManagerViewerPopupDescription/TaskManagerViewerPopupDescription.styled"
import StyledTaskManagerViewerPopupStatusTitle from "./TaskManagerViewerPopupStatusTitle/TaskManagerViewerPopupStatusTitle.styled"
import StyledTaskManagerViewerPopupSubtaskList from "./TaskManagerViewerPopupSubtaskList/TaskManagerViewerPopupSubtaskList.styled"
import StyledTaskManagerViewerPopupSubtasksNum from "./TaskManagerViewerPopupSubtasksNum/TaskManagerViewerPopupSubtasksNum.styled"
import StyledTaskManagerViewerPopupTitle from "./TaskManagerViewerPopupTitle/TaskManagerViewerPopupTitle.styled"
import StyledTaskManagerViewerPopupWindow from "./TaskManagerViewerPopupWindow.styled"
import TaskManagerViewerPopupSubtaskListItem from "./TaskManagerViewerPopupSubtaskList/TaskManagerViewerPopupSubtaskListItem/TaskManagerViewerPopupSubtaskListItem"
import ThreeDots from "../../ThreeDots/ThreeDots"

/**
 * The popup window that allows the user to view the information related to a task.
 * @param {string} id ID of the task that is selected
 */

const TaskManagerViewerPopupWindow = ({ id }: { id: string }) => {
	const [isKebabActive, setIsKebabActive] = useState(false)
	const dispatch = useAppDispatch()

	/**
	 *all the subtasks in the redux store
	 */
	const allSubtasks = useAppSelector((state) => state.subtaskSlice.value.subtasks)

	/**
	 * all the columns in the redux store
	 */
	const allColumns = useAppSelector((state) => state.columnsSlice.value.columns)

	/**
	 * the currently selected board
	 */
	const selectedBoard = useAppSelector((state) => state.boardsSlice.value.boards.find((board) => board.selected === true))

	/**
	 *the task that is selected using the ID
	 */
	const thisTask = useAppSelector((state) => state.tasksSlice.value.tasks.find((task) => task.id === id))

	/**
	 * the list of subtasks belonging to the current task
	 */
	let listOfSubtasks: Subtask[] = []
	/**
	 * The list of columns belonging to this current selected board
	 */
	let listOfColumns: Column[] = []

	//doing the calculations to get the list of subtasks that belong to this task
	if (thisTask) {
		const setOfIds = new Set(thisTask.subtasks)
		listOfSubtasks = allSubtasks.filter((subtask) => setOfIds.has(subtask.id))
	}

	//doing the calculations to get the list of columns that belong to this board
	if (selectedBoard) {
		const setOfIds = new Set(selectedBoard.columns)
		listOfColumns = allColumns.filter((column) => setOfIds.has(column.id))
	}

	/**
	 * tasks that have been completed
	 */
	const completedSubtasks = listOfSubtasks.filter((subtask) => subtask.isCompleted === true)

	/**
	 * This is the column in which the current selected task belongs to.
	 * this value will also determine what the 'status' is in the dropdown
	 */

	const thisColumn = findCurrentColumn(id, listOfColumns)

	/**
	 *
	 * @param id id that represents the id of the current task
	 * @param listOfColumns the list of columns in this currently selected board
	 * @returns the column in which the current task belongs to
	 */

	function handleThreeDotsClick() {
		setIsKebabActive(!isKebabActive)
	}

	/**
	 * handles when user clicks on an item in the kebab menu
	 */
	function handleKebabMenuClick(e: React.MouseEvent<HTMLLIElement>) {
		const data = e.currentTarget.dataset.action
		type DeleteOrEdit = "edit" | "delete"
		switch (data as DeleteOrEdit) {
			case "delete":
				console.log("you are deleting")
				break
			case "edit":
				dispatch(openPopup({ HOCComponent: "TaskManagerPopupWindow", editing: true }))
				console.log("you are editing")
				break
			default:
				console.log("nothing")
		}
	}

	/**
	 * Finds the column in which the current task belongs to.
	 * @param {string} id - The ID of the current task.
	 * @param {Column[]} listOfColumns - The list of columns in the currently selected board.
	 * @returns {Column} - The column in which the current task belongs to.
	 */
	function findCurrentColumn(id: string, listOfColumns: Column[]): Column {
		for (const column of listOfColumns) {
			if (column.tasks.includes(id)) {
				return column
			}
		}
		return listOfColumns[0]
	}

	return (
		<StyledTaskManagerViewerPopupWindow>
			<StyledTaskManagerViewerPopupTitle>{thisTask?.title}</StyledTaskManagerViewerPopupTitle>
			<StyledTaskManagerViewerPopupDescription>{thisTask?.description}</StyledTaskManagerViewerPopupDescription>
			<StyledTaskManagerViewerPopupSubtasksNum>
				Subtasks ({completedSubtasks.length} of {thisTask?.subtasks.length})
			</StyledTaskManagerViewerPopupSubtasksNum>
			<StyledTaskManagerViewerPopupSubtaskList>
				{listOfSubtasks.map((item) => (
					<TaskManagerViewerPopupSubtaskListItem
						{...item}
						key={item.id}
					/>
				))}
			</StyledTaskManagerViewerPopupSubtaskList>
			<StyledTaskManagerViewerPopupStatusTitle>Current Status</StyledTaskManagerViewerPopupStatusTitle>
			<TaskManagerViewerPopupStatusDropdown
				id={id}
				thisColumn={thisColumn}
				listOfColumns={listOfColumns}
			/>
			<ThreeDots
				handleThreeDotsClick={handleThreeDotsClick}
				position="absolute"
				right="0px"
				top="22px"
			/>
			<KebabMenu
				handleKebabMenuClick={handleKebabMenuClick}
				isKebabActive={isKebabActive}
				subject="Task"
				right="40px"
				top="60px"
			/>
		</StyledTaskManagerViewerPopupWindow>
	)
}

export default TaskManagerViewerPopupWindow
