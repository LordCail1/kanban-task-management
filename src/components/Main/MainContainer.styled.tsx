import styled from "styled-components"

const StyledMainContainer = styled.div<{ activated: boolean }>`
	flex-grow: 1;
	position: relative;
	background-color: ${({ theme }) =>
		theme.style === "dark"
			? theme.colors.very_dark_grey
			: theme.colors.light_grey};
	transition: padding ease-in-out
		${({ theme }) => theme.transitionTimes.medium};
	padding-left: ${({ activated }) => (activated ? "300px" : "0px")};
	display: flex;
	overflow-x: scroll;
`

export default StyledMainContainer
