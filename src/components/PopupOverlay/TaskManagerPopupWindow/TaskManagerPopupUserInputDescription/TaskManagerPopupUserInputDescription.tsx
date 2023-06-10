import StyledTaskManagerPopupUserInputDescription from "./TaskManagerPopupUserInputDescription.styled"
import StyledTaskManagerPopupUserInputDescriptionContent from "./TaskManagerPopupUserInputDescriptionContent/TaskManagerPopupUserInputDescriptionContent.styled"
import StyledTaskManagerPopupUserInputDescriptionTitle from "./TaskManagerPopupUserInputDescriptionTitle/TaskManagerPopupUserInputDescriptionTitle.styled"

const TaskManagerPopupUserInputDescription = () => {
  return (
    <StyledTaskManagerPopupUserInputDescription>
        <StyledTaskManagerPopupUserInputDescriptionTitle>Description</StyledTaskManagerPopupUserInputDescriptionTitle>
        <StyledTaskManagerPopupUserInputDescriptionContent valid={true}/>
    </StyledTaskManagerPopupUserInputDescription>
  )
}

export default TaskManagerPopupUserInputDescription