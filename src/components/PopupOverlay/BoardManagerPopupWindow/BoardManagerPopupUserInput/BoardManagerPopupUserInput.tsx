import StyledBoardManagerPopupUserInputListItemInputBox from "../BoardManagerPopupUserInputListItemInputBox/BoardManagerUserInputListItemInputBox.styled"
import StyledBoardManagerPopupUserInputTitle from "../BoardManagerPopupUserInputTitle/BoardManagerPopupUserInputTitle.styled"
import StyledBoardManagerPopupUserInput from "./BoardManagerPopupUserInput.styled"
import { UseFormRegister, FieldErrors } from "react-hook-form"

const BoardManagerPopupUserInput = ({
	errors,
	placeHolder,
	register,
	title,
}: UserInput & {
	errors: FieldErrors<BoardManagerPopupWindowFormData>
	register: UseFormRegister<BoardManagerPopupWindowFormData>
}) => {
	const isFieldValid = Boolean(!errors.board?.name?.message)
	return (
		<StyledBoardManagerPopupUserInput>
			<StyledBoardManagerPopupUserInputTitle htmlFor="boardName">{title}</StyledBoardManagerPopupUserInputTitle>
			<StyledBoardManagerPopupUserInputListItemInputBox
				placeholder={errors.board?.name?.message ? errors.board.name.message : placeHolder}
				valid={isFieldValid}
				type="text"
				{...register("board.name")}
				id="boardName"
			/>
		</StyledBoardManagerPopupUserInput>
	)
}

export default BoardManagerPopupUserInput
