import styled, { css } from "styled-components"

const StyledTaskTitle = styled.h4`
	margin-bottom: 8px;
	transition: color ease-in-out;
	${({ theme }) => theme.transitionTimes.fast};
`

export default StyledTaskTitle
