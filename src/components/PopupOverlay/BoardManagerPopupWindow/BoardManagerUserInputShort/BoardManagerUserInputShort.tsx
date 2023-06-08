import StyledBoardManagerUserInputBoxShort from "../BoardManagerUserInputBoxShort/BoardManagerUserInputBoxShort.styled"
import StyledBoardManagerUserInputTitle from "../BoardManagerUserInputTitle/BoardManagerUserInputTitle.styled"
import StyledBoardManagerUserInputContainer from "../BoardManagerUserInputContainer/BoardManagerUserInputContainer.styled"
import { UseFormRegister, FieldErrors } from "react-hook-form"
import useValidateField from "../../../../hooks/react-form-hook/useValidateField"

/**
 *
 */
const BoardManagerUserInputShort = ({
	errors,
	placeHolder,
	register,
	title,
}: UserInput & {
	errors: FieldErrors<BoardManagerPopupWindowFormData>
	register: UseFormRegister<BoardManagerPopupWindowFormData>
}) => {
	const { isFieldValid } = useValidateField(errors.board?.boardName?.message)

	return (
		<StyledBoardManagerUserInputContainer>
			<StyledBoardManagerUserInputTitle>{title}</StyledBoardManagerUserInputTitle>
			<StyledBoardManagerUserInputBoxShort
				placeholder={placeHolder}
				valid={isFieldValid}
				type="text"
				{...register("board.boardName")}
			/>
		</StyledBoardManagerUserInputContainer>
	)
}

export default BoardManagerUserInputShort
