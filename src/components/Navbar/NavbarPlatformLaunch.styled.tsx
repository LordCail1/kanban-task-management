import styled from "styled-components";


const StyledPlatformLaunch = styled.h1`
    font-size: 24px;
    color: ${({theme}) => theme.style === 'dark' ? theme.colors.white : theme.colors.black};
    margin-left: 24px;
`

export default StyledPlatformLaunch