import styled from "styled-components"

/**
 * This is a container is what holds the entire screen. It is the container just underneath the div[id=root]
 */
const StyledAppContainer = styled.section`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	overflow-x: hidden;
	height: 100vh;
	background-color: ${({ theme }) => (theme.style === "dark" ? theme.colors.very_dark_grey : theme.colors.light_grey)};
`

export default StyledAppContainer
