import styled, { css } from "styled-components"

/**
 * This is the part of the dropdown menu that the user sees when he clicks on it.
 */
const StyledTaskManagerViewerPopupStatusDropdown = styled.div<{ activated: boolean }>`
	background-color: ${({theme}) => theme.style === 'dark' ? theme.colors.very_dark_grey : theme.colors.white};
	border-radius: 4px;
	color: white;
	cursor: pointer;
	height: auto;
	left: 0;
	overflow-x: hidden;
	position: absolute;
	top: 38px;
	visibility: hidden;
	width: 100%;
	${({ activated, theme }) =>
		activated
			? css`
					visibility: visible;
			  `
			: css`
					
			  `};
`

export default StyledTaskManagerViewerPopupStatusDropdown
