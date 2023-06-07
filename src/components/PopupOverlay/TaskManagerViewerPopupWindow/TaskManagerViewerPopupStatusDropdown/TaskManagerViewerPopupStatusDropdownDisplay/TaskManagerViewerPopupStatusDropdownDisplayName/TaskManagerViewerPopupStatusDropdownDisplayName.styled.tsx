import styled from "styled-components";

/**
 * Contains the value that the dropdown has as a selection
 */
const StyledTaskManagerViewerPopupStatusDropdownDisplayName = styled.h5`
    font-size: 0.813rem;
    color: ${({theme}) => theme.style === 'dark' ? theme.colors.white : theme.colors.black};

`

export default StyledTaskManagerViewerPopupStatusDropdownDisplayName