import styled from "styled-components"
import StyledGeneralTask from "../../../styles/task/GeneralTask.styled"

const StyledEmptyColumnWarning = styled(StyledGeneralTask)`
	border: ${({ theme }) => theme.style === 'dark' && `1px solid ${theme.colors.main_purple}`};
`

export default StyledEmptyColumnWarning
