import styled from "styled-components";


const StyledUserInputTitle = styled.h3`
    color: ${({theme}) => theme.style === 'dark' ? theme.colors.white : theme.colors.medium_grey};
`

export default StyledUserInputTitle