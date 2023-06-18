import { openDeletePopup, openPopup } from "../../../features"
import { useDispatch } from "react-redux"
import React, { useEffect, useState } from "react"
import { useTheme } from "styled-components"
import KebabMenu from "../../KebabMenu/KebabMenu"
import StyledAddNewTaskNavbarGroup from "./AddNewTaskNavbarGroup.styled"
import StyledAddNewTaskNavbarGroupBtnPrimary from "./AddNewTaskNavbarGroupBtnPrimary/AddNewTaskNavbarGroupBtnPrimary.styled"
import ThreeDots from "../../ThreeDots/ThreeDots"
import { useAppSelector } from "../../../hooks/redux/reduxHooks"

/**
 * This component is a group of buttons in the navbar at the top of the screen that allows to add a task if needed.
 */
const AddNewTaskNavbarGroup = ({ isColumnsEmpty }: { isColumnsEmpty: boolean }) => {
	//manages if kebab menu is active or not
	const [isKebabActive, setIsKebabActive] = useState(false)
	//keeps track of the viewport width
	const [viewportWidth, setViewportWidth] = useState(window.innerWidth)

	const dispatch = useDispatch()
	//hook to access theme
	const theme = useTheme()
	//state from store to keep track of popup is active on screen or not
	const isPopupActive = useAppSelector((state) => state.popupSlice.value.active)

	const selectedboard = useAppSelector((state) => state.boardsSlice.value.boards.find((board: Board) => board.selected === true))

	/**
	 * This effect sets the viewport width state when the window is resized.
	 */

	useEffect(() => {
		function getViewPortWidth() {
			setViewportWidth(window.innerWidth)
		}
		window.addEventListener("resize", getViewPortWidth)
		return () => window.removeEventListener("resize", getViewPortWidth)
	}, [])

	/**
	 * Makes sure that if popup is activated, the kebab menu closes
	 */
	useEffect(() => {
		if (isPopupActive) {
			setIsKebabActive(false)
		}
	}, [isPopupActive])

	/**
	 * handles when use clicks on three dots.
	 */
	function handleThreeDotsClick() {
		setIsKebabActive(!isKebabActive)
	}

	/**
	 * handles when user clicks on an item in the kebab menu
	 */
	function handleKebabMenuClick(e: React.MouseEvent<HTMLLIElement>) {
		const data = e.currentTarget.dataset.action
		type DeleteOrEdit = "edit" | "delete"
		switch (data as DeleteOrEdit) {
			case "delete":
				dispatch(openDeletePopup({HOCComponent: "DeletePopupWindow", id: selectedboard?.id, style: "Board"}))
				break
			case "edit":
				dispatch(openPopup({ HOCComponent: "BoardManagerPopupWindow", editing: true }))
				break
			default:
				console.log("nothing")
		}
	}

	/**
	 * This variable sets the content of the button based on the viewport width.
	 */

	const content = viewportWidth > 768 ? "+ Add New Task" : "+"

	return (
		<StyledAddNewTaskNavbarGroup>
			<StyledAddNewTaskNavbarGroupBtnPrimary
				backgroundDarkColor={theme.colors.main_purple}
				backgroundHoverDarkColor={theme.colors.main_purple_hover}
				backgroundHoverLightColor={theme.colors.main_purple_hover}
				backgroundLightColor={theme.colors.main_purple}
				disabled={isColumnsEmpty}
				disabledBtn={isColumnsEmpty}
				fontSize="0.938rem"
				fontWeight={700}
				onClick={() => dispatch(openPopup({ HOCComponent: "TaskManagerPopupWindow", editing: false }))}
				textDarkColor={theme.colors.white}
				textHoverDarkColor={theme.colors.white}
				textHoverLightColor={theme.colors.white}
				textLightColor={theme.colors.white}
			>
				{content}
			</StyledAddNewTaskNavbarGroupBtnPrimary>
			<ThreeDots
				handleThreeDotsClick={handleThreeDotsClick}
				position="static"
			/>
			<KebabMenu
				top="60px"
				subject="Board"
				isKebabActive={isKebabActive}
				handleKebabMenuClick={handleKebabMenuClick}
			/>
		</StyledAddNewTaskNavbarGroup>
	)
}

export default AddNewTaskNavbarGroup
