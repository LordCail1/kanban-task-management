import StyledKebabMenu from "./KebabMenu.styled"
import StyledKebabMenuItem from "./KebabMenuItem/KebabMenuItem.styled"
import { useTheme } from "styled-components"

const KebabMenu = () => {
    const theme = useTheme()
    return (
        <StyledKebabMenu>
            <StyledKebabMenuItem color={theme.colors.white}>
                Edit Task
            </StyledKebabMenuItem>
            <StyledKebabMenuItem color={theme.colors.red}>
                Delete Task
            </StyledKebabMenuItem>
        </StyledKebabMenu>
    )
}

export default KebabMenu