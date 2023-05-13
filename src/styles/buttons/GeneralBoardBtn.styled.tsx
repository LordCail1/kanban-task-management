import styled from "styled-components"

const StyledGeneralBoardBtn = styled.button`
	padding: 14px 0;
	padding-left: 32px;
	border: none;
	font-size: 15px;
	font-weight: 700;
	cursor: pointer;
	display: flex;
	align-items: center;
	background-color: transparent;
	border-bottom-right-radius: 100px;
	border-top-right-radius: 100px;
	width: 92%;
	transition: background-color ${({ theme }) => theme.transitionTimes.fast};
	&:hover {
				background-color: ${({ theme }) =>
					theme.style === "dark"
						? theme.colors.white
						: theme.colors.main_purple_hover2};
			}
`

export default StyledGeneralBoardBtn
