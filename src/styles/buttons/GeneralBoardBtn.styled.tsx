import styled from "styled-components"

const StyledGeneralBoardBtn = styled.button`
	align-items: center;
	background-color: transparent;
	border-bottom-right-radius: 100px;
	border-top-right-radius: 100px;
	border: none;
	cursor: pointer;
	display: flex;
	font-size: 0.938rem;
	font-weight: 700;
	padding: 14px 0 14px 32px;
	transition: background-color ${({ theme }) => theme.transitionTimes.fast};
	width: 92%;
	&:hover {
		background-color: ${({ theme }) => (theme.style === "dark" ? theme.colors.white : theme.colors.main_purple_hover2)};
	}
`

export default StyledGeneralBoardBtn
