import styled from "styled-components"

const StyledGeneralStyledTask = styled.div`
	background-color: ${({ theme }) =>
		theme.style === "dark" ? theme.colors.dark_grey : theme.colors.white};
	border-radius: 8px;
	box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
	color: ${({ theme }) =>
		theme.style === "dark" ? theme.colors.white : theme.colors.black};
	cursor: pointer;
	transition: border ease-in-out
			${({ theme }) => theme.transitionTimes.fast},
		transform ease-in-out ${({ theme }) => theme.transitionTimes.fast};
	font-size: 15px;
	font-weight: 700;
	max-width: 280px;
	padding: 23px 16px;
	position: relative;
	border: 1px solid transparent;
	:hover {
		border: 1px solid ${({ theme }) => theme.style === 'dark' ? theme.colors.main_purple : theme.colors.black};
		box-shadow: 0 0 30px -10px ${({ theme }) => theme.style === 'dark' ? theme.colors.main_purple : theme.colors.black};
		transform: scale(1.01);
	}
`

export default StyledGeneralStyledTask
