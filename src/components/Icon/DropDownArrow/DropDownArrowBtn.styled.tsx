import styled from "styled-components";


const StyledDropDownArrowBtn = styled.button`
    padding: 8px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: transparent;
    border: none;
    display: none;
    @media screen and (max-width: ${({theme}) => theme.mediaQueries.tablet}) {
        display: flex;
    }
`

export default StyledDropDownArrowBtn