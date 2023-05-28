import styled, { css } from "styled-components";
import { StyledGeneralBoardBtn } from "../../styles/buttons";


const StyledCreateNewBoardBtn = styled(StyledGeneralBoardBtn)<MenuArea>`
    color: ${({theme}) => theme.colors.main_purple}

    ${({menuArea}) => menuArea === "dropdown" && css`
    
    
    `}
    ${({menuArea}) => menuArea === "sidebar" && css`
    
    
    `}

`

export default StyledCreateNewBoardBtn