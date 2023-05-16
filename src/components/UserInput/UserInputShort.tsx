import StyledUserInputBoxShort from "./UserInputBoxShort.styled"
import StyledUserInputTitle from "./UserInputTitle.styled"
import StyledUserInputContainer from "./UserInputContainer.styled"
import {
	useAppDispatch,
	useAppSelector,
} from "../../hooks/redux/reduxHooks"
import { setBoardName, validateFields } from "../../features"

const UserInputShort = ({ title, placeHolder }: UserInput) => {
	const dispatch = useAppDispatch()
	const createBoardInfo = useAppSelector((state) => state.addNewBoardSlice)

	return (
		<StyledUserInputContainer>
			<StyledUserInputTitle>{title}</StyledUserInputTitle>
			<StyledUserInputBoxShort
				placeholder={placeHolder}
				onChange={(e) => {
					dispatch(setBoardName(e.target.value))
					dispatch(validateFields(createBoardInfo))
				}}
			/>
		</StyledUserInputContainer>
	)
}

export default UserInputShort
