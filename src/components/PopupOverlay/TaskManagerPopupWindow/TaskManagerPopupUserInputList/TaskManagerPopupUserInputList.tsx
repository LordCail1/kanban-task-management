import StyledTaskManagerPopupUserInputList from "./TaskManagerPopupUserInputList.styled"
import TaskManagerPopupUserInputListItem from "./TaskManagerPopupUserInputListItem/TaskManagerPopupUserInputListItem"
import StyledTaskManagerPopupUserInputListTitle from "./TaskManagerPopupUserInputListTitle/TaskManagerPopupUserInputListTitle.styled"

const TaskManagerPopupUserInputList = () => {
  return (
    <StyledTaskManagerPopupUserInputList>
        <StyledTaskManagerPopupUserInputListTitle>List</StyledTaskManagerPopupUserInputListTitle>
        <TaskManagerPopupUserInputListItem />
    </StyledTaskManagerPopupUserInputList>
  )
}

export default TaskManagerPopupUserInputList