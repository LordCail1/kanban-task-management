import { useAppDispatch, useAppSelector } from "../../../hooks/redux/reduxHooks"
import StyledDeletePopupWindowBtnContainer from "./DeletePopupWindowBtnContainer/DeletePopupWindowBtnContainer.styled"
import StyledDeletePopupWindow from "./DeletePopupWindow.styled"
import StyledDeletePopupWindowBtnPrimary from "./DeletePopupWindowBtnPrimary/DeletePopupWindowBtnPrimary.styled"
import StyledStyledDeletePopupWindowTitle from "./DeletePopupWindowDescription/DeletePopupWindowDescription.styled"
import StyledDeletePopupWindowTitle from "./DeletePopupWindowTitle/DeletePopupWindowTitle.styled"
import StyledDeletePopupWindowBtnSecondary from "./DeletePopupWindowBtnSecondary/DeletePopupWindowBtnSecondary.styled"
import { useTheme } from "styled-components"
import { closePopup, deleteBoard, deleteTask, openDeletePopup, openPopupWithId } from "../../../features"
import React from "react"

const DeletePopupWindow = ({ id, style }: { id: string; style: DeletePopupStyle }) => {
	const thisTask = useAppSelector((state) => state.tasksSlice.value.tasks.find((task: Task) => task.id === id))
	const thisBoard = useAppSelector((state) => state.boardsSlice.value.boards.find((board: Board) => board.id === id))
	const theme = useTheme()
    const dispatch = useAppDispatch()



    function handleDeleteClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        if (style === "Task") {
            dispatch(deleteTask({id: id}))
            dispatch(closePopup())
        } else {
            dispatch(deleteBoard({id: id}))
            dispatch(closePopup())
        }
    }

    function handleCancelClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        if (style === "Task") {
            dispatch(openPopupWithId({HOCComponent: "TaskManagerViewerPopupWindow", editing: true, id: id}))

        } else {
            dispatch(closePopup())
        }
    }

	console.log("style: ", style)
	return (
		<StyledDeletePopupWindow>
			<StyledDeletePopupWindowTitle>Delete this {style === "Board" ? "board" : "task"}</StyledDeletePopupWindowTitle>
			<StyledStyledDeletePopupWindowTitle>
				{style === "Board"
					? `
                Are you sure you want to delete the '${thisBoard?.name}' board? This action will remove
                all columns and tasks and cannot be reversed.
            `
					: `Are you sure you want to delete the '${thisTask?.title}' task and its subtasks? This 
            action cannot be reversed`}
			</StyledStyledDeletePopupWindowTitle>
			<StyledDeletePopupWindowBtnContainer>
				<StyledDeletePopupWindowBtnPrimary
					backgroundDarkColor={theme.colors.red}
					backgroundHoverDarkColor={theme.colors.red_hover}
					backgroundHoverLightColor={theme.colors.red_hover}
					backgroundLightColor={theme.colors.red}
					fontSize="0.813rem"
					fontWeight={700}
					textDarkColor={theme.colors.white}
					textHoverDarkColor={theme.colors.white}
					textHoverLightColor={theme.colors.white}
					textLightColor={theme.colors.white}
                    onClick={handleDeleteClick}
				>
					Delete
				</StyledDeletePopupWindowBtnPrimary>
				<StyledDeletePopupWindowBtnSecondary
					backgroundDarkColor={theme.colors.white}
					backgroundHoverDarkColor={theme.colors.light_grey}
					backgroundHoverLightColor={theme.colors.main_purple_hover}
					backgroundLightColor={theme.colors.main_purple_hover2}
					fontSize="0.813rem"
					fontWeight={700}
					textDarkColor={theme.colors.main_purple}
					textHoverDarkColor={theme.colors.main_purple}
					textHoverLightColor={theme.colors.main_purple}
					textLightColor={theme.colors.main_purple}
                    onClick={handleCancelClick}
				>
					Cancel
				</StyledDeletePopupWindowBtnSecondary>
			</StyledDeletePopupWindowBtnContainer>
		</StyledDeletePopupWindow>
	)
}

export default DeletePopupWindow
