import styled from "styled-components"

const StyledThemeControl = styled.label`
	align-items: center;
    border-radius: 6px;
	bottom: 88px;
	display: flex;
	height: 48px;
	justify-content: center;
	left: 50%;
	position: absolute;
	transform: translateX(-50%);
	width: 235px;
    background-color: ${({ theme}) => theme.style === "dark" ? theme.colors.very_dark_grey : theme.colors.light_grey};
`

export default StyledThemeControl
