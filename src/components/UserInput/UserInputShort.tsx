import StyledUserInputBoxShort from "./UserInputBoxShort.styled"
import StyledUserInputTitle from "./UserInputTitle.styled" 
import StyledUserInputContainer from "./UserInputContainer.styled"

const UserInputShort = ({ title, placeHolder }: UserInput) => {
	return (
		<StyledUserInputContainer>
			<StyledUserInputTitle>{title}</StyledUserInputTitle>
			<StyledUserInputBoxShort placeholder={placeHolder} />
		</StyledUserInputContainer> 
	)
}

export default UserInputShort  
