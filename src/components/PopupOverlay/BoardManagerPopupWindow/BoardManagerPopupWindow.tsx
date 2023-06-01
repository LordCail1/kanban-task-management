/* eslint-disable no-mixed-spaces-and-tabs */
import { useEffect, useState } from "react"
import AddNewColumnPopupBtn from "../../PopupButton/AddNewColumnPopupBtn"
import CreateNewBoardPopupInputBtn from "../../PopupButton/CreateNewBoardPopupInputBtn"
import UserInputItemList from "../../UserInput/UserInputItemList"
import UserInputShort from "../../UserInput/UserInputShort"
import StyledBoardManagerPopupTitle from "./BoardManagerPopupTitle/BoardManagerPopupTitle.styled.tsx"
import StyledBoardManagerPopupWindow from "./BoardManagerPopupWindow.styled.tsx"
import { ZodType, z } from "zod"
import { useFieldArray, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { addBoard, addColumns, closePopup } from "../../../features"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux/reduxHooks"
import BoardManagerPopupWindowCreaterFormHook from "../../../hooks/custom/boardsManagement/BoardManagerPopupWindowCreaterFormHook.tsx"
import { nanoid } from "nanoid"
import BoardManagerPopupWindowEditerFormHook from "../../../hooks/custom/boardsManagement/BoardManagerPopupWindowEditerFormHook.tsx"

const schema: ZodType<BoardManagerPopupWindowCreateFormData> = z.object({
	// boardName: z.string().min(3).max(30),
	board: z.object({
		boardName: z.string().min(3).max(30),
		id: z.string().min(3).max(30),
	}),
	columns: z.array(
		z.object({
			columnName: z.string().min(3).max(30),
			id: z.string().min(3).max(30),
		})
	),
})

const BoardManagerPopupWindow = ({ editing }: { editing: boolean }) => {
	const dispatch = useAppDispatch()

	//grabbing the state of the board currently being edited
	const editingBoard = useAppSelector((state) => state.editingBoardSlice.value)

	//settings the default values depending on if editing or not
	const [defaultValues, setDefaultValues] = useState<BoardManagerPopupWindowCreateFormData>({
		board: {
			boardName: "",
			id: "",
		},
		columns: [{ columnName: "", id: ""}],
	})

	useEffect(() => {
		if (editing) {
			setDefaultValues({
				board: {
					boardName: editingBoard.board.boardName,
					id: editingBoard.board.id
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
	} = useForm<BoardManagerPopupWindowCreateFormData>({
		resolver: zodResolver(schema),
		defaultValues,
	})

	const { fields, append, remove } = useFieldArray({
		control,
		name: "columns",
	})

	function submitData(data: BoardManagerPopupWindowCreateFormData): void {
		// Reset the form and close the popup
		reset(defaultValues)
		dispatch(closePopup())


		if (editing) {
			BoardManagerPopupWindowEditerFormHook(data, editingBoard)
		} else {
			const { structuredBoard, structuredColumns } = BoardManagerPopupWindowCreaterFormHook(data)
			dispatch(addBoard(structuredBoard))
			dispatch(addColumns(structuredColumns))
		}
	}

	function handleAddNewColumnRow(): void {
		return append({ columnName: "", id: nanoid(10) })
	}

	return (
		<StyledBoardManagerPopupWindow onSubmit={handleSubmit(submitData)}>
			<StyledBoardManagerPopupTitle>
				{editing ? "Edit Board" : "Add New Board"}
			</StyledBoardManagerPopupTitle>
			<UserInputShort
				title="Board Name"
				placeHolder="e.g Web Design"
				register={register}
				errors={errors}
			/>
			<UserInputItemList
				title="Board Columns"
				register={register}
				fields={fields}
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
