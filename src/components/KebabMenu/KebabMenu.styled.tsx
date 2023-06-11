import styled from "styled-components"

const StyledKebabMenu = styled.ul`
	background-color: grey;
	position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
	height: 94px;
	width: 192px;
    border-radius: 8px;
    background-color: ${({theme}) => theme.colors.very_dark_grey};
    cursor: pointer;
    list-style: none;
`

export default StyledKebabMenu
