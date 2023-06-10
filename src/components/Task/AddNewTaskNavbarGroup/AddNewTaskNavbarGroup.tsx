import { useEffect, useState } from "react"
import ThreeDots from "../../ThreeDots/ThreeDots"
import StyledAddNewTaskNavbarGroup from "./AddNewTaskNavbarGroup.styled"
import { useDispatch } from "react-redux"
import { openPopup } from "../../../features"
import StyledAddNewTaskNavbarGroupBtnPrimary from "./AddNewTaskNavbarGroupBtnPrimary/AddNewTaskNavbarGroupBtnPrimary.styled"
import { useTheme } from "styled-components"


/**
 * This component is a group of buttons in the navbar at the top of the screen that allows to add a task if needed.
 */
const AddNewTaskNavbarGroup = ({ isColumnsEmpty }: { isColumnsEmpty: boolean }) => {
	const theme = useTheme()
	const [viewportWidth, setViewportWidth] = useState(window.innerWidth)
	const dispatch = useDispatch()

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
			<StyledAddNewTaskNavbarGroupBtnPrimary
				onClick={() => dispatch(openPopup({ HOCComponent: "TaskManagerCreatorPopupWindow", editing: false }))}
				disabled={isColumnsEmpty}
				disabledBtn={isColumnsEmpty}
				backgroundDarkColor={theme.colors.main_purple}
				backgroundLightColor={theme.colors.main_purple}
				backgroundHoverDarkColor={theme.colors.main_purple_hover}
				backgroundHoverLightColor={theme.colors.main_purple_hover}
				textDarkColor={theme.colors.white}
				textHoverDarkColor={theme.colors.white}
				textHoverLightColor={theme.colors.white}
				textLightColor={theme.colors.white}
				fontSize="0.938rem"
				fontWeight={700}
			>
				{content}
			</StyledAddNewTaskNavbarGroupBtnPrimary>
			<ThreeDots />
		</StyledAddNewTaskNavbarGroup>
	)
}

export default AddNewTaskNavbarGroup
