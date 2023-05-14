import styled from "styled-components"

const StyledToggleSidebarText = styled.h3<{ activated: boolean }>`
	font-size: 15px;
	position: absolute;
	display: ${({ activated }) => (activated ? "block" : "none")};
`

export default StyledToggleSidebarText
