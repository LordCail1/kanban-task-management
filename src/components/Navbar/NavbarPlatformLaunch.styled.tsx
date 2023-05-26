import styled from "styled-components";


const StyledPlatformLaunch = styled.h1`
    font-size: 1.5rem;
    color: ${({theme}) => theme.style === 'dark' ? theme.colors.white : theme.colors.black};
    margin-left: 24px;
    @media screen and (max-width: ${({theme}) => theme.mediaQueries.desktop}) {
        font-size: 1.25rem;
    }

`

export default StyledPlatformLaunch