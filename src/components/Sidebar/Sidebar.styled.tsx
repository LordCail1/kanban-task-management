import styled from "styled-components"

const StyledSidebar = styled.div`
	background-color: ${({ theme }) => theme.style === "dark" ? theme.colors.dark_grey : theme.colors.white};
	display: flex;
	flex-direction: column;
	padding: 32px 34px;
	width: 300px;
	border-right: 1px solid ${({theme}) => theme.style === 'dark' ? theme.colors.lines_dark : theme.colors.lines_light}
`

export default StyledSidebar
