import styled, { css } from "styled-components"

const StyledMain = styled.div<{activated: boolean}>`
	flex-grow: 1;
    background-color: ${({theme}) => theme.style === 'dark' ? theme.colors.very_dark_grey : theme.colors.light_grey};
    transition: padding all ease-in-out ${({theme}) => theme.transitionTimes.medium};
    padding-left: ${({activated}) => activated ? '300px' : '0px'};
`

export default StyledMain
