import styled, { css } from "styled-components";
import StyledGeneralPopupBtn from "../../../styles/buttons/GeneralPopupBtn/GeneralPopupBtn.styled";
import StyledGeneralBtn from "../../../styles/buttons/GeneralBtn/GeneralBtn.styled";

const StyledAddNewTaskBtn = styled(StyledGeneralPopupBtn)<{disabledBtn: boolean}>`
    ${StyledGeneralBtn} 
    ${({disabledBtn}) => disabledBtn && css`
        opacity: 0.25; 
        pointer-events: none;
    `}
`

export default StyledAddNewTaskBtn