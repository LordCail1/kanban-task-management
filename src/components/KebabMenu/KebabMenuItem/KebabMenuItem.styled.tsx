import styled from "styled-components";


const StyledKebabMenuItem = styled.li<{color: string}>`
    font-size: 0.813rem;
    color: ${({theme}) => theme.colors.medium_grey};
    padding: 16px;
    color: ${({color})=> color};
    &:hover {
        background-color: ${({theme}) => theme.colors.dark_grey};
    }
    &:first-child {
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
    }
    &:last-child {
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
    }

`

export default StyledKebabMenuItem