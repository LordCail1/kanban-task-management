import { FieldErrors, UseFormRegister } from "react-hook-form"
import StyledTaskManagerPopupUserInputDescription from "./TaskManagerPopupUserInputDescription.styled"
import StyledTaskManagerPopupUserInputDescriptionContent from "./TaskManagerPopupUserInputDescriptionContent/TaskManagerPopupUserInputDescriptionContent.styled"
import StyledTaskManagerPopupUserInputDescriptionTitle from "./TaskManagerPopupUserInputDescriptionTitle/TaskManagerPopupUserInputDescriptionTitle.styled"

const TaskManagerPopupUserInputDescription = ({
	errors,
	placeHoder,
	register,
}: {
	errors: FieldErrors<TaskManagerPopupWindowFormData>
	placeHoder: string
	register: UseFormRegister<TaskManagerPopupWindowFormData>
}) => {
	const isFieldValid = Boolean(!errors.task?.description?.message)

	return (
		<StyledTaskManagerPopupUserInputDescription>
			<StyledTaskManagerPopupUserInputDescriptionTitle>Description</StyledTaskManagerPopupUserInputDescriptionTitle>
			<StyledTaskManagerPopupUserInputDescriptionContent
				{...register("task.description")}
				placeholder={placeHoder}
				valid={isFieldValid}
			/>
		</StyledTaskManagerPopupUserInputDescription>
	)
}

export default TaskManagerPopupUserInputDescription
