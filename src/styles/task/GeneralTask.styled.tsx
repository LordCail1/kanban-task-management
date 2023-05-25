import styled from "styled-components"

const StyledGeneralTask = styled.div`
	background-color: ${({ theme }) =>
		theme.style === "dark" ? theme.colors.dark_grey : theme.colors.white};

	box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
	color: ${({ theme }) =>
		theme.style === "dark" ? theme.colors.white : theme.colors.black};
	cursor: pointer;
	transition: border ease-in-out
			${({ theme }) => theme.transitionTimes.fast},
		transform ease-in-out ${({ theme }) => theme.transitionTimes.fast};
	font-size: 15px;
	font-weight: 700;
	border-radius: 8px;
	max-width: 280px;
	padding: 23px 16px;
	position: relative;
	border: 1px solid transparent;
	&:hover {
		border: ${({ theme }) =>
			theme.style === "dark" && `1px solid ${theme.colors.main_purple}`};
		box-shadow: ${({ theme }) =>
			theme.style === "dark" &&
			`0 0 30px -10px ${theme.colors.main_purple}`};
		transform: scale(1.06);
	}
`

export default StyledGeneralTask
