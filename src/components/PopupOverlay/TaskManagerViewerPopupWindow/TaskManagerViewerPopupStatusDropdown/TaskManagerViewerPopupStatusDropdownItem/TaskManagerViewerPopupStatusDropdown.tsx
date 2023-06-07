import { useRef, useState } from "react"
import StyledTaskManagerViewerPopupStatusDropdown from "../TaskManagerViewerPopupStatusDropdown.styled"
import StyledTaskManagerViewerPopupStatusDropdownDisplay from "../TaskManagerViewerPopupStatusDropdownDisplay/TaskManagerViewerPopupStatusDropdownDisplay.styled"
import StyledTaskManagerViewerPopupStatusDropdownItem from "./TaskManagerViewerPopupStatusDropdownItem.styled"
import StyledTaskManagerViewerPopupStatusDropdownDisplayName from "../TaskManagerViewerPopupStatusDropdownDisplay/TaskManagerViewerPopupStatusDropdownDisplayName/TaskManagerViewerPopupStatusDropdownDisplayName.styled"
import TaskManagerViewerPopupStatusDropdownDisplayArrow from "../TaskManagerViewerPopupStatusDropdownDisplay/TaskManagerViewerPopupStatusDropdownDisplayArrow/TaskManagerViewerPopupStatusDropdownDisplayArrow"
import { useAppDispatch } from "../../../../../hooks/redux/reduxHooks"
import { switchTaskFromColumn } from "../../../../../features"

/**
 * this is a custom dropdown menu created. I say 'custom' beause it re-creates what a regular
 * dropdown menu would do, but with better styling.
 * @param listOfColumns This is also known as 'status'. This is a list of all the columns that
 * belong to the current board the user is on.
 * @param thisColumn This is the column in which the current selected task belongs to.
 * this value will also determine what the 'status' is in the dropdown
 * @param id the id of the current task that is on screen
 */
const TaskManagerViewerPopupStatusDropdown = ({ listOfColumns, thisColumn, id }: { listOfColumns: Column[]; thisColumn: Column, id: string }) => {
    const dispatch = useAppDispatch()
	const [selectedValue, setSelectedValue] = useState()
	const [activated, setActivated] = useState(false)
	return (
		<StyledTaskManagerViewerPopupStatusDropdownDisplay onClick={() => setActivated((preValue) => !preValue)}>
			<StyledTaskManagerViewerPopupStatusDropdownDisplayName>{thisColumn.name}</StyledTaskManagerViewerPopupStatusDropdownDisplayName>
			<TaskManagerViewerPopupStatusDropdownDisplayArrow />
			<StyledTaskManagerViewerPopupStatusDropdown activated={activated}>
				{listOfColumns.map((column) => (
					<StyledTaskManagerViewerPopupStatusDropdownItem key={column.id} onClick={() => dispatch(switchTaskFromColumn({thisColumn: thisColumn, thisTaskId: id, newColumnId: column.id}))}>{column.name}</StyledTaskManagerViewerPopupStatusDropdownItem>
				))}
			</StyledTaskManagerViewerPopupStatusDropdown>
		</StyledTaskManagerViewerPopupStatusDropdownDisplay>
	)
}

export default TaskManagerViewerPopupStatusDropdown
