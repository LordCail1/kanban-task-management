import styled from "styled-components";


const StyledTask = styled.div`
    background-color: ${({theme}) => theme.style === 'dark' ? theme.colors.dark_grey : theme.colors.white};
    border-radius: 8px;
    color: ${({theme}) => theme.style === 'dark' ? theme.colors.white : theme.colors.black};
    cursor: pointer; 
    margin-bottom: 20px;
    padding: 23px 16px;
    font-size: 15px;
    font-weight: 700;
    max-width: 280px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
`

export default StyledTask