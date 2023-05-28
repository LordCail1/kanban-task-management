import styled, { css } from "styled-components"

const StyledThemeControl = styled.label<MenuArea>`
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
	${({menuArea}) => menuArea === "dropdown" && css`
		bottom: 16px;
	
	`}
	${({menuArea}) => menuArea === "sidebar" && css`

	
	
	`}
`

export default StyledThemeControl
