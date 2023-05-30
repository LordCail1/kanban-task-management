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
	register: UseFormRegister<AddNewBoardPopupWindowFormData>
	errors: FieldErrors<AddNewBoardPopupWindowFormData>
}) => {
	const { isFieldValid } = useValidateField(errors.boardName?.message)

	return (
		<StyledUserInputContainer>
			<StyledUserInputTitle>{title}</StyledUserInputTitle>
			<StyledUserInputBoxShort
				placeholder={placeHolder}
				valid={isFieldValid}
				type="text"
				{...register("boardName")}
				
			/>
		</StyledUserInputContainer>
	)
}

export default UserInputShort
