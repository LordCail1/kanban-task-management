import styled from "styled-components";


const StyledKebabMenuItem = styled.li`
    color: ${({theme}) => theme.style === "dark" ?  theme.colors.medium_grey : theme.colors.black};
    font-size: 0.813rem;
    padding: 16px;
    &:hover {
        background-color: ${({theme}) => theme.style === "dark" ? theme.colors.dark_grey : theme.colors.main_purple_hover2};
    }
    &:first-child {
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
    }
    &:last-child {
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        color: ${({theme}) => theme.colors.red};
    }

`

export default StyledKebabMenuItem