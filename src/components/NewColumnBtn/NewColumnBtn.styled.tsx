import styled from "styled-components"

const StyledNewColumnBtn = styled.div`
	align-items: center;
	box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
	color: ${({ theme }) =>
		theme.style === "dark" ? theme.colors.white : theme.colors.black};
	display: flex;
	font-weight: 700;
	height: 80vh;
	justify-content: center;
	transition: border ease-in-out ${({ theme }) => theme.transitionTimes.fast}, transform ease-in-out ${({ theme }) => theme.transitionTimes.fast};
	min-width: 280px;
	border-radius: 8px;
	background: ${({theme}) => theme.colors.dark_grey};
	background: ${({ theme }) =>
		theme.style === "dark"
			? `linear-gradient(
		0deg, ${theme.colors.very_dark_grey} 0%,
		${theme.colors.dark_grey} 100%
	)`
			: theme.colors.white};
	margin: 63px 24px 0 24px;
	cursor: pointer;
	&:hover {
		transition: border ease-in-out ${({ theme }) => theme.transitionTimes.fast}, transform ease-in-out ${({ theme }) => theme.transitionTimes.fast};
		color: ${({ theme }) =>
			theme.style === "dark" && theme.colors.main_purple};
		border: ${({ theme }) =>
			theme.style === "dark" && `1px solid ${theme.colors.main_purple}`};
		box-shadow: ${({ theme }) =>
			theme.style === "dark" &&
			`0 0 30px -10px ${theme.colors.main_purple}`};

		transform: scale(1.01);
	}
`

export default StyledNewColumnBtn
