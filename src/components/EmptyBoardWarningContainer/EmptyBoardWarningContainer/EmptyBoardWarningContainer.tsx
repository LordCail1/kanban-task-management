import StyledEmptyBoardWarningContainer from "./EmptyBoardWarningContainer.styled"
import StyledEmptyBoardWarningText from "../EmptyBoardWarningText/EmptyBoardWarningText.styled"
import { openPopup } from "../../../features"
import { useAppDispatch } from "../../../hooks/redux/reduxHooks"

import { useTheme } from "styled-components"
import StyledEmptyBoardWarningBtnPrimary from "../EmptyBoardWarningBtnPrimary/EmptyBoardWarningBtnPrimary.styled"
const EmptyBoardWarningContainer = () => {
	const theme = useTheme()
	const dispatch = useAppDispatch()

	return (
		<StyledEmptyBoardWarningContainer>
			<StyledEmptyBoardWarningText>This board is empty. Create a new column to get started</StyledEmptyBoardWarningText>
			<StyledEmptyBoardWarningBtnPrimary
				backgroundDarkColor={theme.colors.main_purple}
				backgroundHoverDarkColor={theme.colors.main_purple_hover}
				backgroundHoverLightColor={theme.colors.main_purple_hover}
				backgroundLightColor={theme.colors.main_purple}
				fontSize="0.938rem"
				fontWeight={700}
				onClick={() => dispatch(openPopup({ HOCComponent: "BoardManagerPopupWindow", editing: true }))}
				textDarkColor={theme.colors.white}
				textHoverDarkColor={theme.colors.white}
				textHoverLightColor={theme.colors.white}
				textLightColor={theme.colors.white}
			>
				+ Add New Column
			</StyledEmptyBoardWarningBtnPrimary>
		</StyledEmptyBoardWarningContainer>
	)
}

export default EmptyBoardWarningContainer
