import { FieldErrors, UseFormRegister } from "react-hook-form"
import StyledTaskManagerPopupUserInput from "./TaskManagerPopupUserInput.styled"
import StyledTaskManagerPopupUserInputListItemInputBox from "./TaskManagerPopupUserInputListItemInputBox/TaskManagerPopupUserInputListItemInputBox.styled"
import StyledTaskManagerUserInputTitle from "./TaskManagerPopupUserInputTitle/TaskManagerPopupUserInputTitle.styled"

const TaskManagerPopupUserInput = ({
	errors,
	placeHolder,
	register,
}: {
	errors: FieldErrors<TaskManagerPopupWindowFormData>
	placeHolder: string
	register: UseFormRegister<TaskManagerPopupWindowFormData>
}) => {
	const isFieldValid = Boolean(!errors.task?.title?.message)

	return (
		<StyledTaskManagerPopupUserInput>
			<StyledTaskManagerUserInputTitle>Title</StyledTaskManagerUserInputTitle>
			<StyledTaskManagerPopupUserInputListItemInputBox
				{...register("task.title")}
				placeholder={placeHolder}
				valid={isFieldValid}
			/>
		</StyledTaskManagerPopupUserInput>
	)
}

export default TaskManagerPopupUserInput
