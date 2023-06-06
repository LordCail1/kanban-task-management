import StyledTaskManagerViewerPopupSubtaskCheckbox from "../TaskManagerViewerPopupSubtaskCheckbox/TaskManagerViewerPopupSubtaskCheckbox.styled"
import StyledTaskManagerViewerPopupSubtaskLabel from "../TaskManagerViewerPopupSubtaskLabel/TaskManagerViewerPopupSubtaskLabel.styled"
import StyledTaskManagerViewerPopupSubtaskListItem from "./TaskManagerViewerPopupSubtaskListItem.styled"
import TaskManagerViewerPopupSubtaskCustomCheckbox from "../TaskManagerViewerPopupSubtaskCheckbox/TaskManagerViewerPopupSubtaskCustomCheckbox"
import { useAppDispatch } from "../../../../../hooks/redux/reduxHooks"
import { checkSubtask } from "../../../../../features"

const TaskManagerViewerPopupSubtaskListItem = ({ id, isCompleted, title }: Subtask) => {
	const dispatch = useAppDispatch()

	return (
		<StyledTaskManagerViewerPopupSubtaskListItem onClick={() => dispatch(checkSubtask(id))} checked={isCompleted}>
			<StyledTaskManagerViewerPopupSubtaskCheckbox
				type="checkbox"
				checked={isCompleted}
			/>
            <TaskManagerViewerPopupSubtaskCustomCheckbox checked={isCompleted}/>

			<StyledTaskManagerViewerPopupSubtaskLabel checked={isCompleted}>{title}</StyledTaskManagerViewerPopupSubtaskLabel>
		</StyledTaskManagerViewerPopupSubtaskListItem>
	)
}

export default TaskManagerViewerPopupSubtaskListItem
