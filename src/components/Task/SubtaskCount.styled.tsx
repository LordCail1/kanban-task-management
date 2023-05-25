import styled from "styled-components";


const StyledSubtaskCount = styled.h5`
    font-size: 0.75rem;
    color: ${({theme}) => theme.colors.medium_grey};
    transition: color ease-in-out ${({theme}) => theme.transitionTimes.fast};
`

export default StyledSubtaskCount

    

