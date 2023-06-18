import styled, { css } from "styled-components"

const StyledKebabMenu = styled.ul<Active & Direction>`
	background-color: ${({ theme }) => (theme.style === "dark" ? theme.colors.very_dark_grey : theme.colors.white)};
	border-radius: 8px;
	border: 1px solid ${({ theme }) => theme.style === "dark" ? theme.colors.lines_dark : theme.colors.lines_light};
	bottom: ${({ bottom }) => bottom};
	color: ${({ theme }) => theme.colors.very_dark_grey};
	cursor: pointer;
	height: 94px;
	left: ${({ left }) => left};
	list-style: none;
	position: absolute;
	right: ${({ right }) => right};
	top: ${({ top }) => top};
	transform-origin: 100% 0;
	transform: scale(0);
	transition: transform ease-in-out ${({ theme }) => theme.transitionTimes.medium},visibility ease-in-out ${({ theme }) => theme.transitionTimes.medium};
	visibility: hidden;
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
