import styled, { css } from "styled-components"

const StyledPopupOverlay = styled.div<{ active: boolean }>`
	position: absolute;
	height: 100%;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	${({ active }) =>
		active
			? css`
					display: block;
			  `
			: css`
					display: none;
			  `};
`

export default StyledPopupOverlay
