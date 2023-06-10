/* eslint-disable no-mixed-spaces-and-tabs */
import { addBoard, addColumns, addColumnsCreate, closePopup, deleteColumns, updateBoard, updateColumns } from "../../../features"
import { nanoid } from "nanoid"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux/reduxHooks"
import { useEffect, useState } from "react"
import { useFieldArray, useForm } from "react-hook-form"
import { useTheme } from "styled-components"
import { zodResolver } from "@hookform/resolvers/zod"
import BoardManagerPopupUserInput from "./BoardManagerPopupUserInput/BoardManagerPopupUserInput.tsx"
import BoardManagerPopupUserInputList from "./BoardManagerPopupUserInputList/BoardManagerPopupUserInputList.tsx"
import BoardManagerPopupWindowCreaterFormHook from "../../../hooks/custom/boardsManagement/BoardManagerPopupWindowCreaterFormHook.tsx"
import BoardManagerPopupWindowEditerFormHook from "../../../hooks/custom/boardsManagement/BoardManagerPopupWindowEditerFormHook.tsx"
import BoardManagerSchema from "../../../forms/BoardManager/BoardManagerSchema.ts"
import StyledBoardManagerPopupBtnPrimary from "./BoardManagerPopupBtnPrimary/BoardManagerPopupBtnPrimary.styled.tsx"
import StyledBoardManagerPopupBtnSecondary from "./BoardManagerPopupBtnSecondary/BoardManagerPopupBtnSecondary.styled.tsx"
import StyledBoardManagerPopupTitle from "./BoardManagerPopupTitle/BoardManagerPopupTitle.styled.tsx"
import StyledBoardManagerPopupWindow from "./BoardManagerPopupWindow.styled.tsx"

/**
 * This component
 */
const BoardManagerPopupWindow = ({ editing }: { editing: boolean }) => {
	const theme = useTheme()

	const dispatch = useAppDispatch()

	//grabbing the state of the board currently being edited
	const editingBoard = useAppSelector((state) => state.editingBoardSlice.value)

	//settings the default values depending on if editing or not
	const [defaultValues, setDefaultValues] = useState<BoardManagerPopupWindowFormData>({
		board: {
			name: "",
			id: "",
		},
		columns: [{ name: "", id: "" }],
	})

	useEffect(() => {
		if (editing) {
			setDefaultValues({
				board: {
					name: editingBoard.board.name,
					id: editingBoard.board.id,
				},
				columns: editingBoard.columns,
			})
		} else {
			setDefaultValues({
				board: { name: "", id: nanoid(10) },
				columns: [{ name: "", id: nanoid(10) }],
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
	} = useForm<BoardManagerPopupWindowFormData>({
		resolver: zodResolver(BoardManagerSchema),
		defaultValues,
	})

	const {
		fields: columnFields,
		append,
		remove,
	} = useFieldArray({
		control,
		name: "columns",
	})

	function submitData(boardData: BoardManagerPopupWindowFormData) {
		console.log("data")
		// Reset the form and close the popup
		reset(defaultValues)
		dispatch(closePopup())

		if (editing) {
			const { boardInfo, columnsInfo } = BoardManagerPopupWindowEditerFormHook(boardData, editingBoard)
			dispatch(updateColumns(columnsInfo))
			dispatch(updateBoard(boardInfo))
			dispatch(deleteColumns(columnsInfo))
			dispatch(addColumns(columnsInfo))
		} else {
			const { structuredBoard, structuredColumns } = BoardManagerPopupWindowCreaterFormHook(boardData)
			dispatch(addBoard(structuredBoard))
			dispatch(addColumnsCreate(structuredColumns))
		}
	}

	function handleAddNewColumnRow() {
		return append({ name: "", id: nanoid(10) })
	}

	return (
		<StyledBoardManagerPopupWindow onSubmit={handleSubmit(submitData)}>
			<StyledBoardManagerPopupTitle>{editing ? "Edit Board" : "Add New Board"}</StyledBoardManagerPopupTitle>
			<BoardManagerPopupUserInput
				title="Board Name"
				placeHolder="e.g Web Design"
				register={register}
				errors={errors}
			/>
			<BoardManagerPopupUserInputList
				title={columnFields.length !== 0 ? "Board Columns" : ""}
				register={register}
				columnFields={columnFields}
				errors={errors}
				remove={remove}
			/>
			<StyledBoardManagerPopupBtnSecondary
				backgroundDarkColor={theme.colors.white}
				backgroundHoverDarkColor={theme.colors.light_grey}
				backgroundHoverLightColor={theme.colors.main_purple_hover}
				backgroundLightColor={theme.colors.main_purple_hover2}
				textDarkColor={theme.colors.main_purple}
				textHoverDarkColor={theme.colors.main_purple}
				textHoverLightColor={theme.colors.main_purple}
				textLightColor={theme.colors.main_purple}
				fontSize="0.813rem"
				fontWeight={700}
				onClick={handleAddNewColumnRow}
			>
				+Add New Column
			</StyledBoardManagerPopupBtnSecondary>
			<StyledBoardManagerPopupBtnPrimary
				backgroundDarkColor={theme.colors.main_purple}
				backgroundHoverDarkColor={theme.colors.main_purple_hover}
				backgroundHoverLightColor={theme.colors.main_purple_hover}
				backgroundLightColor={theme.colors.main_purple}
				fontSize="0.813rem"
				textDarkColor={theme.colors.white}
				textHoverDarkColor={theme.colors.white}
				textHoverLightColor={theme.colors.white}
				textLightColor={theme.colors.white}
				fontWeight={700}
				type="submit"
				text={editing ? "Save Changes" : "Create New Board"}
			>
				{editing ? "Save Changes" : "Create New Board"}
			</StyledBoardManagerPopupBtnPrimary>
		</StyledBoardManagerPopupWindow>
	)
}

export default BoardManagerPopupWindow
