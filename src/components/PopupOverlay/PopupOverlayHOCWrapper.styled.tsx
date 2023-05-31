import styled, { css } from "styled-components"

const StyledPopupOverlayHOCWrapper = styled.div<Active>`
	position: relative;
	transform: scale(0);
	transition: transform ease-in-out 300ms;
	${({ active }) =>
		active
			? css`
					transform: scale(1);
			  `
			: css`
					transform: scale(0);
			  `};
`

export default StyledPopupOverlayHOCWrapper
