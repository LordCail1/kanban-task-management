import styled from "styled-components"


const StyledGeneralPopupTitles = styled.h2`
    color: ${({theme}) => theme.style === 'dark' ? theme.colors.white : theme.colors.black};
`

export default StyledGeneralPopupTitles