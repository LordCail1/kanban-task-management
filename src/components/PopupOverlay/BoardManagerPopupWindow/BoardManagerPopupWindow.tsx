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
import { nanoid } from "nanoid"
import randomColor from "randomcolor"
import capitalizeAndTrim from "../../../utils/capitalizeAndTrim"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux/reduxHooks"
import BoardManagerPopupWindowCreaterFormHook from "../../../hooks/custom/boardsManagement/BoardManagerPopupWindowCreaterFormHook.tsx"

const schema: ZodType<BoardManagerPopupWindowFormData> = z.object({
	boardName: z.string().min(3).max(30),
	columns: z.array(
		z.object({
			columnName: z.string().max(30),
		})
	),
})

const BoardManagerPopupWindow = ({ editing }: { editing: boolean }) => {
	const dispatch = useAppDispatch()
	const { boardName, columns } = useAppSelector((state) => state.editingBoardSlice.value)
	const [defaultValues, setDefaultValues] = useState<BoardManagerPopupWindowFormData>({
		boardName: "",
		columns: [{ columnName: "" }],
	})

	useEffect(() => {
		if (editing) {
			setDefaultValues({
				boardName,
				columns,
			})
		} else {
			setDefaultValues({ boardName: "", columns: [{ columnName: "" }] })
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
		resolver: zodResolver(schema),
		defaultValues: defaultValues,
	})

	const { fields, append, remove } = useFieldArray({
		control,
		name: "columns",
	})

	const submitData = (data: BoardManagerPopupWindowFormData) => {
		// Reset the form and close the popup
		reset(defaultValues)
		dispatch(closePopup())

		if (editing) {
			console.log("yo")
		} else {
			const { structuredBoard, structuredColumns } = BoardManagerPopupWindowCreaterFormHook(data)
			dispatch(addBoard(structuredBoard))
			dispatch(addColumns(structuredColumns))
		}
	}

	const handleAddNewColumnRow = () => append({ columnName: "" })

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
