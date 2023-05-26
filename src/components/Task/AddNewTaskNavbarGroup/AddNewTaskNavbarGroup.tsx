import { useEffect, useState } from "react"
import ThreeDots from "../../ThreeDots/ThreeDots"
import StyledAddNewTaskBtn from "../AddNewTaskBtn/AddNewTaskBtn.styled"
import StyledAddNewTaskNavbarGroup from "./AddNewTaskNavbarGroup.styled"

const AddNewTaskNavbarGroup = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth)


  useEffect(() => {
    function getViewPortWidth() {
      setViewportWidth(window.innerWidth)
    }
    window.addEventListener('resize', getViewPortWidth)
    return () => window.removeEventListener('resize', getViewPortWidth)
  },[])

  const content = viewportWidth > 768 ? '+ Add New Task' : '+'


  return (
    <StyledAddNewTaskNavbarGroup>
        <StyledAddNewTaskBtn onClick={() => console.log('clicked to add a new task')}>{content}</StyledAddNewTaskBtn>
        <ThreeDots/>
    </StyledAddNewTaskNavbarGroup>
  )
}

export default AddNewTaskNavbarGroup