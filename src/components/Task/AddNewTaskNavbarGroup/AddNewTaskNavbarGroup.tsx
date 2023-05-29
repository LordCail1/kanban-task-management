import { useEffect, useState } from "react"
import ThreeDots from "../../ThreeDots/ThreeDots"
import StyledAddNewTaskBtn from "../AddNewTaskBtn/AddNewTaskBtn.styled"
import StyledAddNewTaskNavbarGroup from "./AddNewTaskNavbarGroup.styled"

//This component is a group of buttons in the navbar at the top of the screen that allows to add a task if needed.
const AddNewTaskNavbarGroup = ({ isColumnsEmpty }: { isColumnsEmpty: boolean }) => {
	const [viewportWidth, setViewportWidth] = useState(window.innerWidth)

	//This effect sets the viewport width state when the window is resized.
	useEffect(() => {
		function getViewPortWidth() {
			setViewportWidth(window.innerWidth)
		}
		window.addEventListener("resize", getViewPortWidth)
		return () => window.removeEventListener("resize", getViewPortWidth)
	}, [])

	//This variable sets the content of the button based on the viewport width.
	const content = viewportWidth > 768 ? "+ Add New Task" : "+"

	return (
		<StyledAddNewTaskNavbarGroup>
			<StyledAddNewTaskBtn
				onClick={() => console.log("clicked to add a new task")}
				disabled={isColumnsEmpty}
				disabledBtn={isColumnsEmpty}
			>
				{content}
			</StyledAddNewTaskBtn>
			<ThreeDots />
		</StyledAddNewTaskNavbarGroup>
	)
}

export default AddNewTaskNavbarGroup
