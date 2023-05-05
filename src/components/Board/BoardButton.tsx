import React from "react"
import StyledBoardButton from "./BoardButton.styled"

const BoardButton:React.FC<{children: React.ReactNode}> = ({children}) => {
	return <StyledBoardButton>{children}</StyledBoardButton>
}

export default BoardButton
