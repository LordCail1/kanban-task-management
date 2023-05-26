import styled from "styled-components";

const StyledNavbarLogoContainer = styled.div`
    border-right: 1px solid ${({theme}) => theme.style === 'dark' ? theme.colors.lines_dark : theme.colors.lines_light};
    width: ${({theme}) => theme.standards.desktopSidebarWidth};
    align-self: stretch;
    display: flex;
    @media screen and (max-width: ${({theme}) => theme.mediaQueries.desktop}) {
        width: ${({theme}) => theme.standards.tabletSidebarWidth};
    }
    @media screen and (max-width: ${({theme}) => theme.mediaQueries.tablet}) {
        display: none;
    }
`

export default StyledNavbarLogoContainer