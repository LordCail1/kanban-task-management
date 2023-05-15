import styled from "styled-components"

const StyledGeneralCrossIcon = styled.svg`
	background-repeat: no-repeat;
	cursor: pointer;
	fill: ${({ theme }) => theme.colors.medium_grey};
	height: 25px;
	margin-left: 15px;
	padding: 5px;
	width: 25px;
    transition: all ease-in-out ${({theme}) => theme.transitionTimes.medium};
	&:hover {
		fill: ${({ theme }) => theme.colors.red};
	}
`
export default StyledGeneralCrossIcon
