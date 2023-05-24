import styled from "styled-components";


const StyledTask = styled.div`
    background-color: ${({theme}) => theme.style === 'dark' ? theme.colors.dark_grey : theme.colors.white};
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
    color: ${({theme}) => theme.style === 'dark' ? theme.colors.white : theme.colors.black};
    cursor: pointer; 
    transition: border ease-in-out ${({theme}) => theme.transitionTimes.fast};

    font-size: 15px;
    font-weight: 700;
    margin-bottom: 20px;
    max-width: 280px;
    padding: 23px 16px;
    position: relative;
    border: 1px solid transparent;
    :hover {
        border: 1px solid ${({theme}) => theme.colors.main_purple};
        box-shadow: 0 0 30px -10px ${({theme}) => theme.colors.main_purple};
    }
`

export default StyledTask