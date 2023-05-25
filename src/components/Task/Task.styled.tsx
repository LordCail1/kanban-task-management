import styled from "styled-components"
import StyledGeneralStyledTask from "../../styles/task/GeneralTask.styled"
import StyledTaskTitle from "./TaskTitle.styled"

const StyledTask = styled(StyledGeneralStyledTask)`
	margin-bottom: 20px;
	&:hover ${StyledTaskTitle} {
		color: ${({theme}) => theme.style === 'dark' ? theme.colors.main_purple : theme.colors.black};
	}
`

export default StyledTask
