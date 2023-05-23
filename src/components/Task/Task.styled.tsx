import styled from "styled-components";


const StyledTask = styled.div`
    background-color: ${({theme}) => theme.colors.dark_grey};
    border-radius: 8px;
    color: ${({theme}) => theme.colors.white};
    cursor: pointer; 
    margin-bottom: 20px;
    padding: 23px 16px;
`

export default StyledTask