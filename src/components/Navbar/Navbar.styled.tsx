import styled from "styled-components"

const StyledNavbar = styled.div`
	height: 97px;
	/* background-color: ${({ theme }) => theme.colors.dark_grey}; */
	background-color: ${({ theme }) => theme.style === 'dark' ? theme.colors.very_dark_grey : theme.colors.white};
	border-bottom: 1px solid ${({ theme }) => theme.style === 'dark' ? theme.colors.lines_dark : theme.colors.lines_light};
`

export default StyledNavbar
