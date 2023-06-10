import StyledTaskManagerPopupBtnPrimary from "./TaskManagerPopupBtnPrimary/TaskManagerPopupBtnPrimary.styled"
import StyledTaskManagerPopupTitle from "./TaskManagerPopupTitle/TaskManagerPopupTitle.styled"
import TaskManagerPopupUserInput from "./TaskManagerPopupUserInput/TaskManagerPopupUserInput"
import { useTheme } from "styled-components"
import StyledTaskManagerPopupWindow from "./TaskManagerPopupWindow.styled"
import TaskManagerPopupUserInputDescription from "./TaskManagerPopupUserInputDescription/TaskManagerPopupUserInputDescription"
import TaskManagerPopupUserInputList from "./TaskManagerPopupUserInputList/TaskManagerPopupUserInputList"

const TaskManagerPopupWindow = ({ editing }: { editing: boolean }) => {
	const theme = useTheme()
	return (
		<StyledTaskManagerPopupWindow>
			<StyledTaskManagerPopupTitle>{editing ? "Edit Task" : "Add New Task"}</StyledTaskManagerPopupTitle>
			<TaskManagerPopupUserInput />
			<TaskManagerPopupUserInputDescription/>
			<TaskManagerPopupUserInputList />





			<StyledTaskManagerPopupBtnPrimary
				backgroundDarkColor={theme.colors.main_purple}
				backgroundHoverDarkColor={theme.colors.main_purple_hover}
				backgroundHoverLightColor={theme.colors.main_purple_hover}
				backgroundLightColor={theme.colors.main_purple}
				textDarkColor={theme.colors.white}
				textHoverDarkColor={theme.colors.white}
				textHoverLightColor={theme.colors.white}
				textLightColor={theme.colors.white}
				fontSize="0.813rem"
				fontWeight={700}
				type="submit"
			>
				Create Task
			</StyledTaskManagerPopupBtnPrimary>
		</StyledTaskManagerPopupWindow>
	)
}

export default TaskManagerPopupWindow
