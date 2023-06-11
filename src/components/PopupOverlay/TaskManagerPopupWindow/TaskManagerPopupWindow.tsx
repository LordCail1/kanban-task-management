import { useTheme } from "styled-components"
import StyledTaskManagerPopupBtnPrimary from "./TaskManagerPopupBtnPrimary/TaskManagerPopupBtnPrimary.styled"
import StyledTaskManagerPopupBtnSecondary from "./TaskManagerPopupBtnSecondary/TaskManagerPopupBtnSecondary.styled"
import StyledTaskManagerPopupTitle from "./TaskManagerPopupTitle/TaskManagerPopupTitle.styled"
import StyledTaskManagerPopupWindow from "./TaskManagerPopupWindow.styled"
import TaskManagerPopupUserInput from "./TaskManagerPopupUserInput/TaskManagerPopupUserInput"
import TaskManagerPopupUserInputDescription from "./TaskManagerPopupUserInputDescription/TaskManagerPopupUserInputDescription"
import TaskManagerPopupUserInputList from "./TaskManagerPopupUserInputList/TaskManagerPopupUserInputList"
import GeneralStatusDropdown from "../General/GeneralStatusDropdown/GeneralStatusDropdown"
import randomColor from "randomcolor"
import StyledTaskManagerPopupDropdownTitle from "./TaskManagerPopupDropdownTitle/TaskManagerPopupDropdownTitle.styled"

const TaskManagerPopupWindow = ({ editing }: { editing: boolean }) => {
	const theme = useTheme()

	const handleAddNewColumnRow = () => {
		console.log("adding a new row")
	}



	/**
	 * This is dummy data so that I have time to create my code with no typescript alarms
	 */
	const column: Column = {
		color: randomColor(),
		id: 'Column1',
		name: "ColumnName1",
		tasks: ["test1", "test2", "test3"]
	}
	const columnArray: Column[] = [
		{
			color: randomColor(),
			id: 'columnArray1',
			name: "columnArrayName1",
			tasks: ["test1", "test2"]
		}, 
		{
			color: randomColor(),
			id: "columnArray2",
			name: "columnArrayName2",
			tasks: ["test2", "test3"]
		}
	]






	return (
		<StyledTaskManagerPopupWindow>
			<StyledTaskManagerPopupTitle>{editing ? "Edit Task" : "Add New Task"}</StyledTaskManagerPopupTitle>
			<TaskManagerPopupUserInput />
			<TaskManagerPopupUserInputDescription />
			<TaskManagerPopupUserInputList />
			<StyledTaskManagerPopupBtnSecondary
				backgroundDarkColor={theme.colors.white}
				backgroundHoverDarkColor={theme.colors.light_grey}
				backgroundHoverLightColor={theme.colors.main_purple_hover}
				backgroundLightColor={theme.colors.main_purple_hover2}
				fontSize="0.813rem"
				fontWeight={700}
				onClick={handleAddNewColumnRow}
				textDarkColor={theme.colors.main_purple}
				textHoverDarkColor={theme.colors.main_purple}
				textHoverLightColor={theme.colors.main_purple}
				textLightColor={theme.colors.main_purple}
			>+ Add New Subtask</StyledTaskManagerPopupBtnSecondary>

			<StyledTaskManagerPopupDropdownTitle>Status</StyledTaskManagerPopupDropdownTitle>
			<GeneralStatusDropdown id="test" thisColumn={column} listOfColumns={columnArray}/>

			<StyledTaskManagerPopupBtnPrimary
				backgroundDarkColor={theme.colors.main_purple}
				backgroundHoverDarkColor={theme.colors.main_purple_hover}
				backgroundHoverLightColor={theme.colors.main_purple_hover}
				backgroundLightColor={theme.colors.main_purple}
				fontSize="0.813rem"
				fontWeight={700}
				textDarkColor={theme.colors.white}
				textHoverDarkColor={theme.colors.white}
				textHoverLightColor={theme.colors.white}
				textLightColor={theme.colors.white}
				type="submit"
			>
				{editing? "Save Changes" : "Create Task"}
			</StyledTaskManagerPopupBtnPrimary>
		</StyledTaskManagerPopupWindow>
	)
}

export default TaskManagerPopupWindow
