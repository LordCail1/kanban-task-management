import styled from "styled-components"

const StyledDropdownMenu = styled.div`
	display: none;
    left: 50%;
    transform: translateX(-50%);
    top: 80px;
	@media screen and (max-width: ${({ theme }) =>
			theme.mediaQueries.tablet}) {
		display: block;
		position: absolute;
		width: 264px;
		height: 322px;
		background-color: ${({ theme }) => theme.colors.dark_grey};
		border-radius: 8px;
	}
`

export default StyledDropdownMenu
