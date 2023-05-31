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

const schema: ZodType<AddNewBoardPopupWindowFormData> = z.object({
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
	const [defaultValues, setDefaultValues] = useState<AddNewBoardPopupWindowFormData>({
		boardName: "",
		columns: [{ columnName: "" }],
	})

	useEffect(() => {
		console.log("useEffect 1")
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
		console.log("useEffect 2")
		// append({ columnName: "" })
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
	} = useForm<AddNewBoardPopupWindowFormData>({
		resolver: zodResolver(schema),
		defaultValues: defaultValues,
	})

	const { fields, append, remove } = useFieldArray({
		control,
		name: "columns",
	})

	const submitData = (data: AddNewBoardPopupWindowFormData) => {
		// Reset the form and close the popup

		// reset({ boardName: "", columns: [{ columnName: "" }] })
		reset(defaultValues)
		dispatch(closePopup())

		// Extract the board name and columns from the form data
		const { boardName, columns: rawColumns } = data

		// Map the raw columns to a structured format
		const preStructuredColumns: Column[] = rawColumns.map((column): Column => {
			// Capitalize and trim the column name
			const columnName = capitalizeAndTrim(column.columnName)
			// Generate a random color for the column
			return {
				name: columnName,
				id: nanoid(10),
				color: randomColor(),
				tasks: [],
			}
		})

		// Remove any empty columns
		const removeEmptyOnes = (columnArray: Column[]) => {
			return columnArray.filter((column) => column.name !== "")
		}
		const structuredColumns = removeEmptyOnes(preStructuredColumns)

		// Extract the IDs of the columns
		const columnIds: string[] = []
		structuredColumns.forEach((column) => columnIds.push(column.id))

		// Create a structured board object
		const structuredBoard: Board = {
			name: boardName,
			id: nanoid(10),
			selected: true,
			columns: columnIds,
		}

		// Dispatch actions to add the board and columns to the store
		dispatch(addBoard(structuredBoard))
		dispatch(addColumns(structuredColumns))
	}

	const handleAddNewColumnRow = () => {
		append({ columnName: "" })
	}

	console.log("Outside")
	return (
		<StyledBoardManagerPopupWindow onSubmit={handleSubmit(submitData)}>
			<StyledBoardManagerPopupTitle>Add New Board</StyledBoardManagerPopupTitle>
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
			<CreateNewBoardPopupInputBtn text="Create New Board" />
		</StyledBoardManagerPopupWindow>
	)
}

export default BoardManagerPopupWindow
