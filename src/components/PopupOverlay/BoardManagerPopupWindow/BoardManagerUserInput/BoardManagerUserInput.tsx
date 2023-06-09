import StyledBoardManagerUserInputListItemInputBox from "../BoardManagerUserInputListItemInputBox/BoardManagerUserInputListItemInputBox.styled"
import StyledBoardManagerUserInputTitle from "../BoardManagerUserInputTitle/BoardManagerUserInputTitle.styled"
import StyledBoardManagerUserInput from "./BoardManagerUserInput.styled"
import { UseFormRegister, FieldErrors } from "react-hook-form"


const BoardManagerUserInput = ({
	errors,
	placeHolder,
	register,
	title,
}: UserInput & {
	errors: FieldErrors<BoardManagerPopupWindowFormData>
	register: UseFormRegister<BoardManagerPopupWindowFormData>
}) => {

	const isFieldValid = Boolean(!errors.board?.boardName?.message)
	return (
		<StyledBoardManagerUserInput>
			<StyledBoardManagerUserInputTitle htmlFor="boardName">{title}</StyledBoardManagerUserInputTitle>
			<StyledBoardManagerUserInputListItemInputBox
				placeholder={errors.board?.boardName?.message ? errors.board.boardName.message : placeHolder}
				valid={isFieldValid}
				type="text"
				{...register("board.boardName")}
				id="boardName"
			/>
		</StyledBoardManagerUserInput>
	)
}

export default BoardManagerUserInput
