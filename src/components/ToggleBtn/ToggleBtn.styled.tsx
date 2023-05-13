import styled, { css } from "styled-components"

const StyledToggleBtn = styled.div<{ checked: ThemeBoolean }>`
	width: 40px;
	cursor: pointer;
	height: 20px;
	border-radius: 200px;
	background-color: ${({ theme }) => theme.colors.main_purple};
	position: relative;
	margin: 0 23px;

	&::before {
		content: "";
		top: 50%;
		position: absolute;
		width: 10px;
		height: 10px;
		background-color: white;
		border-radius: 20px;
		transform: translateY(-50%);
		transition: all ${({theme}) => theme.transitionTimes.medium} ease-in-out;
	}
	${({ checked }) =>
		checked === "light"
			? css`
					&::before {
                        left: 5px;
					}
			  `
			: css`
					&::before {
                        left: 25px;
					}
			  `}
`

export default StyledToggleBtn
