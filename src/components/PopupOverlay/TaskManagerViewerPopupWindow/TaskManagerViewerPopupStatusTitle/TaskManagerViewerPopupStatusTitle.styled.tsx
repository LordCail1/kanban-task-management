import styled from "styled-components";


const StyledTaskManagerViewerPopupStatusTitle = styled.h3`
    color: ${({ theme }) => (theme.style === "dark" ? theme.colors.white : theme.colors.medium_grey)};
	font-size: 0.75rem;
    margin-bottom: 11px;


`

export default StyledTaskManagerViewerPopupStatusTitle