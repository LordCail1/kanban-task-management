import styled from "styled-components";


const StyledTaskManagerViewerPopupStatusDropdown = styled.select`
    padding: 10px;
    border-radius: 4px;
    background-color: transparent;
    cursor: pointer;
    border: 1px solid ${({theme}) => theme.style === 'dark' ? theme.colors.main_purple : `${theme.colors.medium_grey}25` }



`

export default StyledTaskManagerViewerPopupStatusDropdown