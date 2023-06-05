import StyledBoardManagerUserInputBoxShort from "./BoardManagerUserInputBoxShort.styled"
import StyledBoardManagerUserInputTitle from "./BoardManagerUserInputTitle.styled"
import StyledBoardManagerUserInputContainer from "./BoardManagerUserInputContainer.styled"
import { UseFormRegister, FieldErrors } from "react-hook-form"
import useValidateField from "../../../hooks/react-form-hook/useValidateField"

/**
 *
 */
const BoardManagerUserInputShort = ({
	title,
	placeHolder,
	register,
	errors,
}: UserInput & {
	register: UseFormRegister<BoardManagerPopupWindowFormData>
	errors: FieldErrors<BoardManagerPopupWindowFormData>
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
