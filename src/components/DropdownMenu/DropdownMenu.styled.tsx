import styled, { css } from "styled-components"

const StyledDropdownMenu = styled.div`
	display: none;
	@media screen and (max-width: ${({ theme }) => theme.mediaQueries.tablet}) {
		display: block;
		position: relative;
		width: 264px;
		height: 322px;
		background-color: ${({ theme }) =>
			theme.style === "dark"
				? theme.colors.dark_grey
				: theme.colors.white};
		border-radius: 8px;
		box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3);
		transition: transform ease-in-out
				${({ theme }) => theme.transitionTimes.medium},
			opacity ease-in-out ${({ theme }) => theme.transitionTimes.medium};
		
	}
`
export default StyledDropdownMenu
