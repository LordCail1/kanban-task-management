import styled from "styled-components"

const StyledMain = styled.div`
	flex-grow: 1;
    background-color: ${({theme}) => theme.style === 'dark' ? theme.colors.very_dark_grey : theme.colors.light_grey};
`

export default StyledMain
