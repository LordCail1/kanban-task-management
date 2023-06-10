import StyledTaskManagerPopupUserInputListItemInputBox from "../StyledTaskManagerPopupUserInputListItemInputBox/StyledTaskManagerPopupUserInputListItemInputBox.styled"
import StyledTaskManagerUserInputTitle from "../TaskManagerPopupUserInputTitle/TaskManagerPopupUserInputTitle.styled"
import StyledTaskManagerPopupUserInput from "./TaskManagerPopupUserInput.styled"


const TaskManagementPopupUserInput = () => {
    return (
        <StyledTaskManagerPopupUserInput>
            <StyledTaskManagerUserInputTitle>test</StyledTaskManagerUserInputTitle>
            <StyledTaskManagerPopupUserInputListItemInputBox valid={true}/>
            
        </StyledTaskManagerPopupUserInput>
    )
}

export default TaskManagementPopupUserInput 