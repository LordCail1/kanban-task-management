import { Controller, useFieldArray, useForm } from "react-hook-form"
import { nanoid } from "nanoid"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux/reduxHooks"
import { useEffect, useState } from "react"
import { useTheme } from "styled-components"
import { zodResolver } from "@hookform/resolvers/zod"
import randomColor from "randomcolor"
import StyledTaskManagerPopupBtnPrimary from "./TaskManagerPopupBtnPrimary/TaskManagerPopupBtnPrimary.styled"
import StyledTaskManagerPopupBtnSecondary from "./TaskManagerPopupBtnSecondary/TaskManagerPopupBtnSecondary.styled"
import StyledTaskManagerPopupStatusDropdownTitle from "./TaskManagerPopupStatusDropdownTitle/TaskManagerPopupStatusDropdownTitle.styled"
import StyledTaskManagerPopupTitle from "./TaskManagerPopupTitle/TaskManagerPopupTitle.styled"
import StyledTaskManagerPopupWindow from "./TaskManagerPopupWindow.styled"
import TaskManagerPopupStatusDropdown from "./TaskManagerPopupStatusDropdown/TaskManagerPopupStatusDropdown"
import TaskManagerPopupUserInput from "./TaskManagerPopupUserInput/TaskManagerPopupUserInput"
import TaskManagerPopupUserInputDescription from "./TaskManagerPopupUserInputDescription/TaskManagerPopupUserInputDescription"
import TaskManagerPopupUserInputList from "./TaskManagerPopupUserInputList/TaskManagerPopupUserInputList"
import TaskManagerSchema from "../../../forms/TaskManager/TaskManagerSchema"
import useGetEditingTask from "../../../features/task/hooks/GetEditingTask"

/**
 * This is a component that manages 'editing' or 'creating' a task.
 * @param editing if the task is being edited or not
 * @param id the id of the task if being edited
 */
const TaskManagerPopupWindow = ({ editing, id }: { editing: boolean; id?: string }) => {
	const theme = useTheme()
	const dispatch = useAppDispatch()

	const selectedBoard = useAppSelector((state) => state.boardsSlice.value.boards.find((board: Board) => board.selected === true))

	const allColumns =  useAppSelector((state) => state.columnsSlice.value.columns)

	const [defaultValues, setDefaultValues] = useState<TaskManagerPopupWindowFormData>({
		task: {
			title: "",
			description: "",
			id: "",
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
					id: nanoid(10),
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
		append: appendSubtaskField,
		remove: removeSubtaskField,
		fields: subtasksFields,
	} = useFieldArray({
		control,
		name: "subtasks",
	})


	let listOfColumns: Column[] = []



	if (selectedBoard) {
		const setOfIds = new Set(selectedBoard.columns)
		listOfColumns = allColumns.filter((column: Column) => setOfIds.has(column.id))
	}










	function handleAddNewColumnRow() {
		appendSubtaskField({ title: "", id: nanoid(10), isCompleted: false })
	}

	function handleSubmitData() {
		console.log("you submitted the data")
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
		<StyledTaskManagerPopupWindow onSubmit={handleSubmit(handleSubmitData)}>
			<StyledTaskManagerPopupTitle>{editing ? "Edit Task" : "Add New Task"}</StyledTaskManagerPopupTitle>
			<TaskManagerPopupUserInput
				register={register}
				errors={errors}
				placeHolder="e.g. Take coffee break"
			/>
			<TaskManagerPopupUserInputDescription
				register={register}
				errors={errors}
				placeHoder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
			/>
			<TaskManagerPopupUserInputList
				removeSubtaskField={removeSubtaskField}
				subtasksFields={subtasksFields}
				errors={errors}
				register={register}
				placeHolder="e.g. Make coffee"
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

			<StyledTaskManagerPopupStatusDropdownTitle>Status</StyledTaskManagerPopupStatusDropdownTitle>

			<Controller
				name="columns"
				control={control}
				defaultValue={defaultValues.columns}
				render={({ field }) => (
					<TaskManagerPopupStatusDropdown
						value={field.value}
						onChange={field.onChange}
					/>
				)}
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
