import { FieldArrayWithId } from "react-hook-form"
import StyledTaskManagerPopupUserInputList from "./TaskManagerPopupUserInputList.styled"
import TaskManagerPopupUserInputListItem from "./TaskManagerPopupUserInputListItem/TaskManagerPopupUserInputListItem"
import StyledTaskManagerPopupUserInputListTitle from "./TaskManagerPopupUserInputListTitle/TaskManagerPopupUserInputListTitle.styled"

const TaskManagerPopupUserInputList = ({subtasksFields}: {subtasksFields: FieldArrayWithId<TaskManagerPopupWindowFormData>[]}) => {
  return (
    <StyledTaskManagerPopupUserInputList>
        <StyledTaskManagerPopupUserInputListTitle>Subtasks</StyledTaskManagerPopupUserInputListTitle>
        <TaskManagerPopupUserInputListItem />
    </StyledTaskManagerPopupUserInputList>
  )
}

export default TaskManagerPopupUserInputList