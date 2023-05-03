import styled from "styled-components"

const StyledNavbar = styled.div`
	height: 97px;
	background-color: ${({ theme }) => theme.colors.dark_grey};
	border-bottom: 1px solid ${({ theme }) => theme.colors.lines_dark};
`

export default StyledNavbar
