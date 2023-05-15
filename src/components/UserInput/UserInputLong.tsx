import React from "react"
import StyledUserInputTitle from "./UserInputTitle.styled"
import StyledUserInputBoxLong from "./UserInputBoxLong.styled"
import StyledUserInputContainer from "./UserInputContainer.styled"

const UserInputLong: React.FC<UserInputTitle> = ({ title }) => {
	return (
		<StyledUserInputContainer>
			<StyledUserInputTitle>{title}</StyledUserInputTitle>
			<StyledUserInputBoxLong />
		</StyledUserInputContainer>
	)
}

export default UserInputLong
