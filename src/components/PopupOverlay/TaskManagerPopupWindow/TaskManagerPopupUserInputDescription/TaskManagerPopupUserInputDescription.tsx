import { FieldErrors, UseFormRegister } from "react-hook-form"
import StyledTaskManagerPopupUserInputDescription from "./TaskManagerPopupUserInputDescription.styled"
import StyledTaskManagerPopupUserInputDescriptionContent from "./TaskManagerPopupUserInputDescriptionContent/TaskManagerPopupUserInputDescriptionContent.styled"
import StyledTaskManagerPopupUserInputDescriptionTitle from "./TaskManagerPopupUserInputDescriptionTitle/TaskManagerPopupUserInputDescriptionTitle.styled"

const TaskManagerPopupUserInputDescription = ({
	register,
	errors,
}: {
	register: UseFormRegister<TaskManagerPopupWindowFormData>
	errors: FieldErrors<TaskManagerPopupWindowFormData>
}) => {

  const isFieldValid = Boolean(!errors.task?.description?.message)


	return (
		<StyledTaskManagerPopupUserInputDescription>
			<StyledTaskManagerPopupUserInputDescriptionTitle>Description</StyledTaskManagerPopupUserInputDescriptionTitle>
			<StyledTaskManagerPopupUserInputDescriptionContent valid={isFieldValid} {...register("task.description")}/>
		</StyledTaskManagerPopupUserInputDescription>
	)
}

export default TaskManagerPopupUserInputDescription
