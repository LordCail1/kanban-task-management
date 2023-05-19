import StyledUserInputBoxShort from "./UserInputBoxShort.styled"
import StyledUserInputTitle from "./UserInputTitle.styled"
import StyledUserInputContainer from "./UserInputContainer.styled"
import { UseFormRegister, FieldValues } from "react-hook-form"

const UserInputShort = ({
	title,
	placeHolder,
	register,
}: UserInput & { register: UseFormRegister<MyFormData> }) => {
	return (
		<StyledUserInputContainer>
			<StyledUserInputTitle>{title}</StyledUserInputTitle>
			<StyledUserInputBoxShort
				placeholder={placeHolder}
				valid={true}
				type="text"
				{...register("boardName")}
			/>
		</StyledUserInputContainer>
	)
}

export default UserInputShort
