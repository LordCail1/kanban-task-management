import { FieldArrayWithId, UseFieldArrayRemove } from "react-hook-form"
import CrossIcon from "../../../../Icon/CrossIcon/CrossIcon"
import StyledTaskManagerPopupUserInputListItem from "./TaskManagerPopupUserInputListItem.styled"
import StyledTaskManagerPopupUserInputListItemInputBox from "./TaskManagerPopupUserInputListItemInputBox/TaskManagerPopupUserInputListItemInputBox.styled"

const TaskManagerPopupUserInputListItem = ({
	index,
	removeSubtaskField,
	subtask,
}: {
	index: number
	removeSubtaskField: UseFieldArrayRemove
	subtask: FieldArrayWithId<TaskManagerPopupWindowFormData, "subtasks", "id">
}) => {
	return (
		<StyledTaskManagerPopupUserInputListItem>
			<StyledTaskManagerPopupUserInputListItemInputBox
				valid={true}
				value={subtask.title}
			></StyledTaskManagerPopupUserInputListItemInputBox>
			<CrossIcon
				height={15}
				width={15}
				index={index}
				remove={removeSubtaskField}
			/>
		</StyledTaskManagerPopupUserInputListItem>
	)
}

export default TaskManagerPopupUserInputListItem
