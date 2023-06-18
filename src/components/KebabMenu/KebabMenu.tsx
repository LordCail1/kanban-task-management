import { useTheme } from "styled-components"
import StyledKebabMenu from "./KebabMenu.styled"
import StyledKebabMenuItem from "./KebabMenuItem/KebabMenuItem.styled"
import React from "react"

const KebabMenu = ({
	bottom,
	handleKebabMenuClick,
	isKebabActive,
	left,
	right,
	subject,
	top,
}: { subject: string; isKebabActive: boolean; handleKebabMenuClick: (e: React.MouseEvent<HTMLLIElement>) => void } & Direction) => {
	const theme = useTheme()
	return (
		<StyledKebabMenu
			active={isKebabActive}
			bottom={bottom}
			left={left}
			right={right}
			top={top}
		>
			<StyledKebabMenuItem
				data-action="edit"
				onClick={handleKebabMenuClick}
			>
				Edit {subject}
			</StyledKebabMenuItem>
			<StyledKebabMenuItem
				color={theme.colors.red}
				data-action="delete"
				onClick={handleKebabMenuClick}
			>
				Delete {subject}
			</StyledKebabMenuItem>
		</StyledKebabMenu>
	)
}

export default KebabMenu
