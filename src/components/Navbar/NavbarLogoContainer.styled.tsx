import styled from "styled-components";

const StyledNavbarLogoContainer = styled.div`
    border-right: 1px solid ${({theme}) => theme.style === 'dark' ? theme.colors.lines_dark : theme.colors.lines_light};
    width: 300px;
    align-self: stretch;
`

export default StyledNavbarLogoContainer