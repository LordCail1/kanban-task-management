import styled, { css } from "styled-components"

const StyledKebabMenu = styled.ul<Active & Direction>`
	background-color: ${({ theme }) => theme.colors.very_dark_grey};
	border-radius: 8px;
	border: 1px solid ${({ theme }) => `${theme.colors.lines_dark}`};
	bottom: ${({ bottom }) => bottom};
	cursor: pointer;
	height: 94px;
	left: ${({ left }) => left};
	list-style: none;
	position: absolute;
	right: ${({ right }) => right};
	top: ${({ top }) => top};
	transform-origin: 100% 0;
	transform: scale(0);
	visibility: hidden;
	transition: transform ease-in-out ${({ theme }) => theme.transitionTimes.medium},
		visibility ease-in-out ${({ theme }) => theme.transitionTimes.medium};
	width: 192px;
	z-index: 1;
	${({ active }) =>
		active &&
		css`
			transform: scale(1);
			visibility: visible;
			width: 192px;
			height: 94px;
		`};
`

export default StyledKebabMenu
