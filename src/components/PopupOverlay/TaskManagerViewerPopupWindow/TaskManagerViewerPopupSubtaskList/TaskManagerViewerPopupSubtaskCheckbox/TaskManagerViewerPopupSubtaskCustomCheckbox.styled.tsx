import styled from "styled-components";


const StyledTaskManagerViewerPopupSubtaskCustomCheckbox = styled.div<{checked: boolean}>`
    width: 16px;
    border: 1px solid ${({theme, checked}) => checked ? 'none' : theme.colors.medium_grey};
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    background-color: ${({theme, checked}) => checked ? theme.colors.main_purple : theme.colors.dark_grey};

`

export default StyledTaskManagerViewerPopupSubtaskCustomCheckbox