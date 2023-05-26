import styled, { css } from "styled-components";


const StyledGeneralBtn = css`
    align-items: center;
    background-color: ${({theme}) => theme.colors.main_purple};
    border-radius: 200px;
    border: none;
    color: ${({theme}) => theme.colors.white};
    cursor: pointer;
    display: flex;
    font-size: 0.938rem;
    font-weight: 700;
    justify-content: center;
    margin: 0;
    padding: 19px 25px;
    transition: background-color ease-in-out ${({theme}) => theme.transitionTimes.fast};
    &:hover {
        background-color: ${({theme}) => theme.colors.main_purple_hover};
    }

`

export default StyledGeneralBtn