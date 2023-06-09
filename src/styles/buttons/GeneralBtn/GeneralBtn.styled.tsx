import styled, {css} from "styled-components";

const StyledGeneralBtn = styled.button<Button>`
    ${({ theme, textDarkColor, textHoverDarkColor, backgroundDarkColor, backgroundHoverDarkColor, fontSize, fontWeight }) =>
		theme.style === "dark" &&
		css`
			background-color: ${backgroundDarkColor};
			color: ${textDarkColor};
			font-size: ${fontSize ? fontSize : "inherit"};
			font-weight: ${fontWeight ? fontWeight : 'inherit'};
			&:hover {
				color: ${textHoverDarkColor};
				background-color: ${backgroundHoverDarkColor};
			}
		`};
	${({ theme, textLightColor, textHoverLightColor, backgroundLightColor, backgroundHoverLightColor, fontSize, fontWeight }) =>
		theme.style === "light" &&
		css`
			color: ${textLightColor};
			background-color: ${backgroundLightColor};
			font-size: ${fontSize ? fontSize : `inherit`};
			font-weight: ${fontWeight ? fontWeight: 'inherit'};
			&:hover {
				color: ${textHoverLightColor};
				background-color: ${backgroundHoverLightColor};
			}
		`};
	transition: background-color ease-in-out ${({theme}) => theme.transitionTimes.fast};
	border-radius: 200px;
	border: none;
	cursor: pointer;
	height: 40px;
	padding: 8px 0;
`

export default StyledGeneralBtn