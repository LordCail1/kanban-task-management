import styled from "styled-components";
import StyledGeneralStyledTask from "../../../styles/task/GeneralTask.styled";

const StyledEmptyColumnWarning = styled(StyledGeneralStyledTask)`
    border: 1px solid ${({theme}) => theme.colors.main_purple};
`

export default StyledEmptyColumnWarning