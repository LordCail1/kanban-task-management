import UserInputItem from "./UserInputItem"
import StyledUserInputTitle from "./UserInputTitle.styled"

const UserInputItemList = ({ title }: UserInput) => {
	return (
		<>
			<StyledUserInputTitle>{title}</StyledUserInputTitle>
			<UserInputItem />
		</>
	)
}

export default UserInputItemList
