import React from "react"
import StyledUserInput from "./UserInput.styled"
import StyledUserInputTitle from "./UserInputTitle/UserInputTitle.styled"

const UserInput: React.FC<UserInputTitle> = ({ title }) => {
	return (
		<div>
			<StyledUserInputTitle>{title}</StyledUserInputTitle>
			<StyledUserInput />
		</div>
	)
}

export default UserInput
