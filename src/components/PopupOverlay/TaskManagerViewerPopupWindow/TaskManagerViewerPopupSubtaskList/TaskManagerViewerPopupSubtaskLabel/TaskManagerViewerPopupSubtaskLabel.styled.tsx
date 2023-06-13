import styled, { css } from "styled-components"

const StyledTaskManagerViewerPopupSubtaskLabel = styled.label<{ checked: boolean }>`
	padding: 0 13px;
	cursor: pointer;
	letter-spacing: 1px;
	color: ${({ theme, checked }) => (checked ? `${theme.colors.white}50` : theme.colors.white)};
	text-decoration: ${({ checked }) => (checked ? "line-through" : "none")};
	${({checked, theme}) => checked && theme.style === 'dark' && css`
		color: ${theme.colors.white}50;
	`};
	${({checked, theme}) => checked && theme.style !== 'dark' && css`
		color: ${theme.colors.black}50;
	`};
	${({checked, theme}) => !checked && theme.style === 'dark' && css`
		color: ${theme.colors.white};
	`};
	${({checked, theme}) => !checked && theme.style !== 'dark' && css`
		color: ${theme.colors.black};
	`};
`

export default StyledTaskManagerViewerPopupSubtaskLabel
