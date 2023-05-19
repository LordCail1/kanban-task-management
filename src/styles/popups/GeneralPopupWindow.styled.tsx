import styled from "styled-components";


const StyledGeneralPopupWindow = styled.form`
    background-color: ${({theme}) => theme.style === 'dark' ? theme.colors.dark_grey : theme.colors.white};
    padding: 32px;
`

export default StyledGeneralPopupWindow