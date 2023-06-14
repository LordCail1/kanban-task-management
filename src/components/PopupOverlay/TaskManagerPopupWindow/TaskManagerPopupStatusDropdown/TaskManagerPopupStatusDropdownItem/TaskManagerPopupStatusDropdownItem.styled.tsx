import styled from "styled-components"

const StyledTaskManagerPopupStatusDropdownItem = styled.a`
	color: ${({ theme }) => theme.colors.medium_grey};
	display: block;
	font-size: 13px;
	letter-spacing: 1px;
	padding: 10px;
	transition: background-color ease-in-out ${({ theme }) => theme.transitionTimes.fast},
		color ease-in-out ${({ theme }) => theme.transitionTimes.fast};
	&:hover {
		background-color: ${({ theme }) => `${theme.colors.main_purple}`};
		color: ${({ theme }) => theme.colors.white};
	}
`

export default StyledTaskManagerPopupStatusDropdownItem
