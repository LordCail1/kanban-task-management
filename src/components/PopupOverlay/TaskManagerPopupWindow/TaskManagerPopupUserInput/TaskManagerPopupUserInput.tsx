import { FieldErrors, UseFormRegister } from "react-hook-form"
import StyledTaskManagerPopupUserInput from "./TaskManagerPopupUserInput.styled"
import StyledTaskManagerPopupUserInputListItemInputBox from "./TaskManagerPopupUserInputListItemInputBox/TaskManagerPopupUserInputListItemInputBox.styled"
import StyledTaskManagerUserInputTitle from "./TaskManagerPopupUserInputTitle/TaskManagerPopupUserInputTitle.styled"
const TaskManagerPopupUserInput = ({
	register,
	errors,
}: {
	register: UseFormRegister<TaskManagerPopupWindowFormData>
	errors: FieldErrors<TaskManagerPopupWindowFormData>
}) => {

	const isFieldValid = Boolean(!errors.task?.title?.message)



	return (
		<StyledTaskManagerPopupUserInput>
			<StyledTaskManagerUserInputTitle>Title</StyledTaskManagerUserInputTitle>
			<StyledTaskManagerPopupUserInputListItemInputBox valid={isFieldValid} {...register("task.title")}/>
		</StyledTaskManagerPopupUserInput>
	)
}

export default TaskManagerPopupUserInput
