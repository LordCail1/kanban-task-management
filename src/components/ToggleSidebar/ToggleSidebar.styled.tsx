import styled from "styled-components"
import { StyledGeneralBoardBtn } from "../../styles/buttons"

const StyledToggleSidebar = styled(StyledGeneralBoardBtn)`
	position: absolute;
	bottom: 0;
	color: ${({ theme }) => theme.colors.medium_grey};
    &:hover {
        color: ${({theme})=> theme.colors.main_purple};
    }
`

export default StyledToggleSidebar
