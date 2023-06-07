import styled, { css } from "styled-components";


const StyledTaskManagerViewerPopupSubtaskCustomCheckbox = styled.div<{checked: boolean}>`
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    border: 1px solid ${({checked, theme}) => !checked ? `${theme.colors.medium_grey}25` : 'none'};
    ${({checked, theme}) => !checked && theme.style === 'dark' && css`
        background-color: ${theme.colors.dark_grey};
    `};
    ${({checked, theme}) => !checked && theme.style !== 'dark' && css`
        background-color: ${theme.colors.white};
    `};
    ${({checked, theme}) => checked && css`
        background-color: ${theme.colors.main_purple};
    `};


`

export default StyledTaskManagerViewerPopupSubtaskCustomCheckbox