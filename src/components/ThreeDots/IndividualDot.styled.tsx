import styled from "styled-components"

const StyledIndividualDot = styled.div`
	height: 4.62px;
	width: 4.62px;
	background-color: ${({theme}) => theme.colors.medium_grey};
	border-radius: 200px;
	margin-bottom: 3px;
	:last-child {
		margin-bottom: 0;
	}
`

export default StyledIndividualDot
