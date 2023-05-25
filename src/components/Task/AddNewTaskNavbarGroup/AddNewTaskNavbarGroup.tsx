import ThreeDots from "../../ThreeDots/ThreeDots"
import StyledAddNewTaskBtn from "../AddNewTaskBtn/AddNewTaskBtn.styled"
import StyledAddNewTaskNavbarGroup from "./AddNewTaskNavbarGroup.styled"

const AddNewTaskNavbarGroup = () => {
  return (
    <StyledAddNewTaskNavbarGroup>
        <StyledAddNewTaskBtn onClick={() => console.log('clicked to add a new task')}>+ Add New Task</StyledAddNewTaskBtn>
        <ThreeDots/>
    </StyledAddNewTaskNavbarGroup>
  )
}

export default AddNewTaskNavbarGroup