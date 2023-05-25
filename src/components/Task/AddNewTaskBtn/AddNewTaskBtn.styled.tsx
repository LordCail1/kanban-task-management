import styled from "styled-components";
import StyledGeneralPopupBtn from "../../../styles/buttons/GeneralPopupBtn/GeneralPopupBtn.styled";

const StyledAddNewTaskBtn = styled(StyledGeneralPopupBtn)`
    padding: 19px 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.main_purple};
    color: ${({theme}) => theme.colors.white};
    font-size: 0.938rem;
    font-weight: 700;
    transition: background-color ease-in-out ${({theme}) => theme.transitionTimes.fast};
    margin: 0;
    &:hover {
        background-color: ${({theme}) => theme.colors.main_purple_hover};
    }
`

export default StyledAddNewTaskBtn