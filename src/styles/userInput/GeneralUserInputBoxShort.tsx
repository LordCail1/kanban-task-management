import styled from "styled-components";

const StyledGeneralUserInputBoxShort = styled.input`
    background-color: transparent;
    border-radius: 4px;
    border: 1px solid ${({theme}) => theme.style === 'dark' ? theme.colors.lines_dark : theme.colors.lines_light};
    color: ${({theme}) => theme.style === 'dark' ? theme.colors.white : theme.colors.black};
    flex-grow: 1;
    font-size: 13px;
    outline: none;
    padding: 15px;
    transition: all ease-in-out ${({theme}) => theme.transitionTimes.fast};
    &:focus {
        border: 1px solid ${({theme}) => theme.colors.main_purple};
    }
`

export default StyledGeneralUserInputBoxShort