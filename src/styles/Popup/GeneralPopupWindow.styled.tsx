import styled from "styled-components";


const StyledGeneralPopupWindow = styled.div`
    background-color: ${({theme}) => theme.style === 'dark' ? theme.colors.dark_grey : theme.colors.white};
    
`

export default StyledGeneralPopupWindow