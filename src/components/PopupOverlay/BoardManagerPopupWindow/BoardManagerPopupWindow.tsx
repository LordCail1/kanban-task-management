/* eslint-disable no-mixed-spaces-and-tabs */
import { useEffect, useState } from "react"
import AddNewColumnPopupBtn from "../../PopupButton/AddNewColumnPopupBtn"
import CreateNewBoardPopupInputBtn from "../../PopupButton/CreateNewBoardPopupInputBtn"
import BoardManagerUserInputItemList from "./BoardManagerUserInputItemList/BoardManagerUserInputItemList.tsx"
import BoardManagerUserInputShort from "./BoardManagerUserInputShort/BoardManagerUserInputShort.tsx"
import StyledBoardManagerPopupTitle from "./BoardManagerPopupTitle/BoardManagerPopupTitle.styled.tsx"
import StyledBoardManagerPopupWindow from "./BoardManagerPopupWindow.styled.tsx"
import { useFieldArray, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { addBoard, addColumns, addColumnsCreate, closePopup, deleteColumns, updateBoard, updateColumns } from "../../../features"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux/reduxHooks"
import BoardManagerPopupWindowCreaterFormHook from "../../../hooks/custom/boardsManagement/BoardManagerPopupWindowCreaterFormHook.tsx"
import { nanoid } from "nanoid"
import BoardManagerPopupWindowEditerFormHook from "../../../hooks/custom/boardsManagement/BoardManagerPopupWindowEditerFormHook.tsx"
import BoardManagerSchema from "../../../forms/BoardManager/BoardManagerSchema.ts"

const BoardManagerPopupWindow = ({ editing }: { editing: boolean }) => {
	const dispatch = useAppDispatch()

	//grabbing the state of the board currently being edited
	const editingBoard = useAppSelector((state) => state.editingBoardSlice.value)

	//settings the default values depending on if editing or not
	const [defaultValues, setDefaultValues] = useState<BoardManagerPopupWindowFormData>({
		board: {
			boardName: "",
			id: "",
		},
		columns: [{ columnName: "", id: "" }],
	})

	useEffect(() => {
		if (editing) {
			setDefaultValues({
				board: {
					boardName: editingBoard.board.boardName,
					id: editingBoard.board.id,
				},
				columns: editingBoard.columns,
			})
		} else {
			setDefaultValues({
				board: { boardName: "", id: nanoid(10) },
				columns: [{ columnName: "", id: nanoid(10) }],
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
		return append({ columnName: "", id: nanoid(10) })
	}

	return (
		<StyledBoardManagerPopupWindow onSubmit={handleSubmit(submitData)}>
			<StyledBoardManagerPopupTitle>{editing ? "Edit Board" : "Add New Board"}</StyledBoardManagerPopupTitle>
			<BoardManagerUserInputShort
				title="Board Name"
				placeHolder="e.g Web Design"
				register={register}
				errors={errors}
			/>
			<BoardManagerUserInputItemList
				title={columnFields.length !== 0 ? "Board Columns" : ""}
				register={register}
				columnFields={columnFields}
				errors={errors}
				remove={remove}
			/>
			<AddNewColumnPopupBtn
				text="+Add New Column"
				handleClick={handleAddNewColumnRow}
			/>
			<CreateNewBoardPopupInputBtn text={editing ? "Save Changes" : "Create New Board"} />
		</StyledBoardManagerPopupWindow>
	)
}

export default BoardManagerPopupWindow
