import { useAppDispatch, useAppSelector } from "../../../hooks/redux/reduxHooks"
import { useFieldArray, useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import { useTheme } from "styled-components"
import { zodResolver } from "@hookform/resolvers/zod"
import GeneralStatusDropdown from "../General/GeneralStatusDropdown/GeneralStatusDropdown"
import randomColor from "randomcolor"
import StyledTaskManagerPopupBtnPrimary from "./TaskManagerPopupBtnPrimary/TaskManagerPopupBtnPrimary.styled"
import StyledTaskManagerPopupBtnSecondary from "./TaskManagerPopupBtnSecondary/TaskManagerPopupBtnSecondary.styled"
import StyledTaskManagerPopupDropdownTitle from "./TaskManagerPopupDropdownTitle/TaskManagerPopupDropdownTitle.styled"
import StyledTaskManagerPopupTitle from "./TaskManagerPopupTitle/TaskManagerPopupTitle.styled"
import StyledTaskManagerPopupWindow from "./TaskManagerPopupWindow.styled"
import TaskManagerPopupUserInput from "./TaskManagerPopupUserInput/TaskManagerPopupUserInput"
import TaskManagerPopupUserInputDescription from "./TaskManagerPopupUserInputDescription/TaskManagerPopupUserInputDescription"
import TaskManagerPopupUserInputList from "./TaskManagerPopupUserInputList/TaskManagerPopupUserInputList"
import TaskManagerSchema from "../../../forms/TaskManager/TaskManagerSchema"
import useGetEditingTask from "../../../features/task/hooks/GetEditingTask"
import { nanoid } from "nanoid"

const TaskManagerPopupWindow = ({ editing, id }: { editing: boolean; id?: string }) => {
	const theme = useTheme()
	const dispatch = useAppDispatch()

	const [defaultValues, setDefaultValues] = useState<TaskManagerPopupWindowFormData>({
		task: {
			title: "",
			description: "",
		},
		subtasks: [{ title: "", id: "", isCompleted: false }],
		columns: [{ name: "", color: "", id: "", tasks: [] }],
	})

	const editingTaskInfo = useGetEditingTask(id)

	useEffect(() => {
		if (editing) {
			if (editingTaskInfo) {
				const { taskData } = editingTaskInfo
				setDefaultValues(taskData)
			}
		} else {
			setDefaultValues({
				task: {
					title: "",
					description: "",
				},
				columns: [{ color: randomColor(), id: nanoid(10), name: "", tasks: [] }],
				subtasks: [{ title: "", id: nanoid(10), isCompleted: false }],
			})
		}
	}, [])

	useEffect(() => {
		reset(defaultValues)
	}, [defaultValues])

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		reset,
	} = useForm<TaskManagerPopupWindowFormData>({
		resolver: zodResolver(TaskManagerSchema),
	})

	const {
		append,
		remove: removeSubtaskField,
		fields: subtasksFields,
	} = useFieldArray({
		control,
		name: "subtasks",
	})

	const handleAddNewColumnRow = () => {
		console.log("adding a new row")
	}

	/**
	 * This is dummy data so that I have time to create my code with no typescript alarms
	 */
	const column: Column = {
		color: randomColor(),
		id: "Column1",
		name: "ColumnName1",
		tasks: ["test1", "test2", "test3"],
	}
	const columnArray: Column[] = [
		{
			color: randomColor(),
			id: "columnArray1",
			name: "columnArrayName1",
			tasks: ["test1", "test2"],
		},
		{
			color: randomColor(),
			id: "columnArray2",
			name: "columnArrayName2",
			tasks: ["test2", "test3"],
		},
	]

	return (
		<StyledTaskManagerPopupWindow>
			<StyledTaskManagerPopupTitle>{editing ? "Edit Task" : "Add New Task"}</StyledTaskManagerPopupTitle>
			<TaskManagerPopupUserInput
				register={register}
				errors={errors}
			/>
			<TaskManagerPopupUserInputDescription
				register={register}
				errors={errors}
			/>
			<TaskManagerPopupUserInputList
				removeSubtaskField={removeSubtaskField}
				subtasksFields={subtasksFields}
			/>
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
			>
				+ Add New Subtask
			</StyledTaskManagerPopupBtnSecondary>

			<StyledTaskManagerPopupDropdownTitle>Status</StyledTaskManagerPopupDropdownTitle>
			<GeneralStatusDropdown
				id="test"
				thisColumn={column}
				listOfColumns={columnArray}
			/>

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
				{editing ? "Save Changes" : "Create Task"}
			</StyledTaskManagerPopupBtnPrimary>
		</StyledTaskManagerPopupWindow>
	)
}

export default TaskManagerPopupWindow
