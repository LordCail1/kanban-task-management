import { FieldArrayWithId, FieldErrors, UseFieldArrayRemove, UseFormRegister } from "react-hook-form"
import CrossIcon from "../../../../Icon/CrossIcon/CrossIcon"
import StyledTaskManagerPopupUserInputListItem from "./TaskManagerPopupUserInputListItem.styled"
import StyledTaskManagerPopupUserInputListItemInputBox from "./TaskManagerPopupUserInputListItemInputBox/TaskManagerPopupUserInputListItemInputBox.styled"

const TaskManagerPopupUserInputListItem = ({
	errors,
	index,
	placeHolder,
	register,
	removeSubtaskField,
	subtask,
}: {
	errors: FieldErrors<TaskManagerPopupWindowFormData>
	index: number
	placeHolder: string
	register: UseFormRegister<TaskManagerPopupWindowFormData>
	removeSubtaskField: UseFieldArrayRemove
	subtask: FieldArrayWithId<TaskManagerPopupWindowFormData, "subtasks", "id">
}) => {
	const isFieldValid = Boolean(!errors.subtasks?.[index]?.title?.message)

	return (
		<StyledTaskManagerPopupUserInputListItem>
			<StyledTaskManagerPopupUserInputListItemInputBox
				valid={isFieldValid}
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
