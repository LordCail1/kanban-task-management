import { FieldArrayWithId, UseFieldArrayRemove } from "react-hook-form"
import StyledTaskManagerPopupUserInputList from "./TaskManagerPopupUserInputList.styled"
import TaskManagerPopupUserInputListItem from "./TaskManagerPopupUserInputListItem/TaskManagerPopupUserInputListItem"
import StyledTaskManagerPopupUserInputListTitle from "./TaskManagerPopupUserInputListTitle/TaskManagerPopupUserInputListTitle.styled"

const TaskManagerPopupUserInputList = ({
	removeSubtaskField,
	subtasksFields,
}: {
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

				/>
			))}
		</StyledTaskManagerPopupUserInputList>
	)
}

export default TaskManagerPopupUserInputList
