import styled from "styled-components";


const StyledTaskManagerViewerPopupStatusDropdownItem = styled.a`
    display: block;
    color: ${({theme}) => theme.colors.medium_grey};
    transition: background-color ease-in-out ${({theme}) => theme.transitionTimes.fast}, color ease-in-out ${({theme}) => theme.transitionTimes.fast};
    padding: 10px;
    font-size: 13px;
    &:hover {
        background-color: ${({theme}) => `${theme.colors.main_purple}`};
        color: ${({theme}) => theme.colors.white};
    }
   
`

export default StyledTaskManagerViewerPopupStatusDropdownItem