import styled, { css } from "styled-components"

const StyledPopupOverlay = styled.div<Active>`
	position: absolute;
	height: 100%;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	transition: opacity ease-in-out ${({theme}) => theme.transitionTimes.medium};
	display: block;
	${({ active }) =>
		active
			? css`
					opacity: 1;
					visibility: visible;
			  `
			: css`
					opacity: 0;
					visibility: hidden;
			  `};
`

export default StyledPopupOverlay
