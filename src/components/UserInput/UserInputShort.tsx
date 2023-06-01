import StyledUserInputBoxShort from "./UserInputBoxShort.styled"
import StyledUserInputTitle from "./UserInputTitle.styled"
import StyledUserInputContainer from "./UserInputContainer.styled"
import { UseFormRegister, FieldErrors } from "react-hook-form"
import useValidateField from "../../hooks/react-form-hook/useValidateField"

const UserInputShort = ({
	title,
	placeHolder,
	register,
	errors,
}: UserInput & {
	register: UseFormRegister<BoardManagerPopupWindowCreateFormData>
	errors: FieldErrors<BoardManagerPopupWindowCreateFormData>
}) => {
	const { isFieldValid } = useValidateField(errors.board?.boardName?.message)

	return (
		<StyledUserInputContainer>
			<StyledUserInputTitle>{title}</StyledUserInputTitle>
			<StyledUserInputBoxShort
				placeholder={placeHolder}
				valid={isFieldValid}
				type="text"
				{...register("board.boardName")}
			/>
		</StyledUserInputContainer>
	)
}

export default UserInputShort
