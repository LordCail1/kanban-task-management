import styled from "styled-components"
import StyledTask from "./Task.styled"

const StyledTaskTitle = styled.h4`
	margin-bottom: 8px;
	transition: color ease-in-out ${({theme}) => theme.transitionTimes.fast};

	${StyledTask}:hover & {
		color: ${({ theme }) => theme.style === 'dark' ? theme.colors.main_purple : theme.colors.black};
	}
`

export default StyledTaskTitle
