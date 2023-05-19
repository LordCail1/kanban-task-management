import { useEffect, useState } from "react"
import AddNewColumnPopupBtn from "../../PopupButton/AddNewColumnPopupBtn"
import CreateNewBoardPopupInputBtn from "../../PopupButton/CreateNewBoardPopupInputBtn"
import UserInputItemList from "../../UserInput/UserInputItemList"
import UserInputShort from "../../UserInput/UserInputShort"
import StyledAddNewBoardPopupTitle from "./AddNewBoardPopupTitle/AddNewBoardPopupTitle.styled"
import StyledAddNewBoardPopupWindow from "./AddNewBoardPopupWindow.styled"
import { ZodType, z } from "zod"
import { useFieldArray, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useDispatch } from "react-redux"
import { addBoard, addColumns, closePopup } from "../../../features"
import { nanoid } from "nanoid"

const schema: ZodType<MyFormData> = z.object({
	boardName: z.string().min(3).max(30),
	columns: z.array(
		z.object({
			columnName: z.string().min(3).max(30),
		})
	),
})

const AddNewBoardPopupWindow = () => {
	useState<boolean>(false)
	const dispatch = useDispatch()

	useEffect(() => {
		append({ columnName: "" })
	}, [])

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		reset,
	} = useForm<MyFormData>({
		resolver: zodResolver(schema),
	})

	const { fields, append, remove } = useFieldArray({
		control,
		name: "columns",
	})

	const submitData = (data: MyFormData) => {
		console.log("IT WORKED", data)
		reset({ boardName: "", columns: [{ columnName: "" }] })
		dispatch(closePopup())
		const { boardName, columns } = data



		//setting up columns
		const structuredColumns: Column[] = columns.map((column): Column => {
			return {
				name: column.columnName,
				id: nanoid(10),
				tasks: [""],
			}
		})



		const columnIds: string[] = []

		structuredColumns.forEach((column) => columnIds.push(column.id))

		const structuredBoard: Board = {
			name: boardName,
			id: nanoid(10),
			selected: true,
			columns: columnIds,
		}

		dispatch(addBoard(structuredBoard))
		dispatch(addColumns(structuredColumns))
	}

	const handleAddNewColumnRow = () => {
		append({ columnName: "" })
	}

	return (
		<StyledAddNewBoardPopupWindow onSubmit={handleSubmit(submitData)}>
			<StyledAddNewBoardPopupTitle>
				Add New Board
			</StyledAddNewBoardPopupTitle>
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
		</StyledAddNewBoardPopupWindow>
	)
}

export default AddNewBoardPopupWindow
