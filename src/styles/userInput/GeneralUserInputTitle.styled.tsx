import styled from "styled-components"

const StyledGeneralUserInputTitle = styled.label`
	color: ${({ theme }) =>
		theme.style === "dark"
			? theme.colors.white
			: theme.colors.medium_grey};
	font-size: 12px;
	margin-bottom: 8px;
	font-weight: 700;
`

export default StyledGeneralUserInputTitle
