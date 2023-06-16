import { FieldArrayWithId, FieldErrors, UseFieldArrayRemove, UseFormRegister } from "react-hook-form"
import StyledTaskManagerPopupUserInputList from "./TaskManagerPopupUserInputList.styled"
import TaskManagerPopupUserInputListItem from "./TaskManagerPopupUserInputListItem/TaskManagerPopupUserInputListItem"
import StyledTaskManagerPopupUserInputListTitle from "./TaskManagerPopupUserInputListTitle/TaskManagerPopupUserInputListTitle.styled"

const TaskManagerPopupUserInputList = ({
	errors,
	placeHolder,
	register,
	removeSubtaskField,
	subtasksFields,
}: {
	errors: FieldErrors<TaskManagerPopupWindowFormData>
	placeHolder: string
	register: UseFormRegister<TaskManagerPopupWindowFormData>
	removeSubtaskField: UseFieldArrayRemove
	subtasksFields: FieldArrayWithId<TaskManagerPopupWindowFormData, "subtasks", "id">[]
}) => {
		




	return (
		<StyledTaskManagerPopupUserInputList>
			<StyledTaskManagerPopupUserInputListTitle>Subtasks</StyledTaskManagerPopupUserInputListTitle>
			{subtasksFields.map((subtask, index) => (
				<TaskManagerPopupUserInputListItem
					removeSubtaskField={removeSubtaskField}
					subtask={subtask}
					index={index}
					register={register}
					placeHolder={placeHolder}
					errors={errors}
					key={subtask.id}
				/>
			))}
		</StyledTaskManagerPopupUserInputList>
	)
}

export default TaskManagerPopupUserInputList
