import { FieldArrayWithId, UseFieldArrayRemove, UseFormRegister } from "react-hook-form"
import CrossIcon from "../../../../Icon/CrossIcon/CrossIcon"
import StyledTaskManagerPopupUserInputListItem from "./TaskManagerPopupUserInputListItem.styled"
import StyledTaskManagerPopupUserInputListItemInputBox from "./TaskManagerPopupUserInputListItemInputBox/TaskManagerPopupUserInputListItemInputBox.styled"

const TaskManagerPopupUserInputListItem = ({
	index,
	register,
	removeSubtaskField,
	subtask,
	placeHolder,
}: {
	index: number
	register: UseFormRegister<TaskManagerPopupWindowFormData>
	removeSubtaskField: UseFieldArrayRemove
	subtask: FieldArrayWithId<TaskManagerPopupWindowFormData, "subtasks", "id">
	placeHolder: string
}) => {
	return (
		<StyledTaskManagerPopupUserInputListItem>
			<StyledTaskManagerPopupUserInputListItemInputBox
				valid={true}
				{...register(`subtasks.${index}.title`)}
				defaultValue={subtask.title}
				placeholder={placeHolder}
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
