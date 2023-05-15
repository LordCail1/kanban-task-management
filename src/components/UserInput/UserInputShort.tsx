import StyledUserInputBoxShort from "./UserInputBoxShort.styled"
import StyledUserInputTitle from "./UserInputTitle.styled" 
import StyledUserInputContainer from "./UserInputContainer.styled"
import { useAppDispatch } from "../../hooks/redux/reduxHooks"
import { setBoardName } from "../../features"


const UserInputShort = ({ title, placeHolder }: UserInput) => {
	const dispatch = useAppDispatch()
	return (
		<StyledUserInputContainer>
			<StyledUserInputTitle>{title}</StyledUserInputTitle>
			<StyledUserInputBoxShort placeholder={placeHolder} onBlur={(e) => dispatch(setBoardName(e.target.value))}/>
		</StyledUserInputContainer> 
	)
}

export default UserInputShort  
