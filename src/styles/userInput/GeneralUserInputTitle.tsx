import styled from "styled-components"

const StyledGeneralUserInputTitle = styled.h3`
	color: ${({ theme }) =>
		theme.style === "dark"
			? theme.colors.white
			: theme.colors.medium_grey};
	font-size: 12px;
	margin-bottom: 8px;
`

export default StyledGeneralUserInputTitle