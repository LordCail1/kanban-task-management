import { useState } from "react"
import StyledTaskManagerViewerPopupSubtaskCheckbox from "../TaskManagerViewerPopupSubtaskCheckbox/TaskManagerViewerPopupSubtaskCheckbox.styled"
import StyledTaskManagerViewerPopupSubtaskLabel from "../TaskManagerViewerPopupSubtaskLabel/TaskManagerViewerPopupSubtaskLabel.styled"
import StyledTaskManagerViewerPopupSubtaskListItem from "./TaskManagerViewerPopupSubtaskListItem.styled"
import TaskManagerViewerPopupSubtaskCustomCheckbox from "../TaskManagerViewerPopupSubtaskCheckbox/TaskManagerViewerPopupSubtaskCustomCheckbox"

const TaskManagerViewerPopupSubtaskListItem = ({ id, isCompleted, title }: Subtask) => {
	const [checked, setChecked] = useState(false)

	return (
		<StyledTaskManagerViewerPopupSubtaskListItem onClick={() => setChecked((prev) => !prev)} checked={checked}>
			<StyledTaskManagerViewerPopupSubtaskCheckbox
				type="checkbox"
				checked={checked}
			/>
            <TaskManagerViewerPopupSubtaskCustomCheckbox checked={checked}/>

			<StyledTaskManagerViewerPopupSubtaskLabel checked={checked}>{title}</StyledTaskManagerViewerPopupSubtaskLabel>
		</StyledTaskManagerViewerPopupSubtaskListItem>
	)
}

export default TaskManagerViewerPopupSubtaskListItem
