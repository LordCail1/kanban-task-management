import styled from "styled-components"

const StyledNavbar = styled.div`
	background-color: ${({ theme }) => theme.style === 'dark' ? theme.colors.very_dark_grey : theme.colors.white};
	border-bottom: 1px solid ${({ theme }) => theme.style === 'dark' ? theme.colors.lines_dark : theme.colors.lines_light};
	min-height: 97px;
	display: flex;
	align-items: center;
	width: 100% ;
	position: relative;
`

export default StyledNavbar
