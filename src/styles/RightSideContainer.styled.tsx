import styled from "styled-components"

const StyledRightSideContainer = styled.section`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	overflow-x: hidden;
	background-color: ${({ theme }) =>
		theme.style === "dark"
			? theme.colors.very_dark_grey
			: theme.colors.light_grey};
`

export default StyledRightSideContainer
