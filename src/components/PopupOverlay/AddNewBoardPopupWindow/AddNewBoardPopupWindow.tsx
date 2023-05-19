import { useState } from "react"
import { addNewColumnRow } from "../../../features/popupWindows/addNewBoardSlice"
import { useAppDispatch } from "../../../hooks/redux/reduxHooks"
import AddNewColumnPopupBtn from "../../PopupButton/AddNewColumnPopupBtn"
import CreateNewBoardPopupInputBtn from "../../PopupButton/CreateNewBoardPopupInputBtn"
import UserInputItemList from "../../UserInput/UserInputItemList"
import UserInputShort from "../../UserInput/UserInputShort"
import StyledAddNewBoardPopupTitle from "./AddNewBoardPopupTitle/AddNewBoardPopupTitle.styled"
import StyledAddNewBoardPopupWindow from "./AddNewBoardPopupWindow.styled"
import { ZodType, z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const AddNewBoardPopupWindow = () => {
	const dispatch = useAppDispatch()
	useState<boolean>(false)

	const schema: ZodType<MyFormData> = z.object({
		boardName: z.string().min(2).max(30),
		columns: z.array(
			z.object({
				columnName: z.string().min(2).max(30),
			})
		),
	})

	const { register, handleSubmit } = useForm<MyFormData>({
		resolver: zodResolver(schema),
	})

	const submitData = (data: MyFormData) => {
		console.log("IT WORKED", data)
	}

	const handleAddNewColumnRow = () => {
		console.log("added a new column")
		dispatch(addNewColumnRow())
	}

	return (
		<StyledAddNewBoardPopupWindow onSubmit={handleSubmit(submitData)}>
			{
				//Board title written 'Board name' and the name we give it
			}
			<StyledAddNewBoardPopupTitle>
				Add New Board
			</StyledAddNewBoardPopupTitle>
			<UserInputShort
				title="Board Name"
				placeHolder="e.g Web Design"
				register={register}
			/>

			{
				//list of columns that we add
			}
			<UserInputItemList
				title="Board Columns"
				register={register}
			/>

			{
				//buttons to create new column or create the board
			}
			<AddNewColumnPopupBtn
				text="+Add New Column"
				handleClick={handleAddNewColumnRow}
			/>
			<CreateNewBoardPopupInputBtn text="Create New Board" />
		</StyledAddNewBoardPopupWindow>
	)
}

export default AddNewBoardPopupWindow
