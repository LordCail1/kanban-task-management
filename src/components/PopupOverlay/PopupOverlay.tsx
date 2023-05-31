import React, { useRef } from "react"
import StyledPopupOverlay from "./PopupOverlay.styled"
import { useAppDispatch, useAppSelector } from "../../hooks/redux/reduxHooks"
import { closePopup } from "../../features"
import useGetComponentFromString from "../../hooks/custom/useGetComponentFromString"
import { nanoid } from "nanoid"
import StyledPopupOverlayHOCWrapper from "./PopupOverlayHOCWrapper.styled"

const PopupOverlay = ({ active }: { active: boolean }) => {
	const dispatch = useAppDispatch()
	const overlayRef = useRef<HTMLDivElement>(null)
	const { component: currentComponentString, editing } = useAppSelector(
		(state) => state.popupSlice.value
	)
	const Content = useGetComponentFromString(currentComponentString)

	const handleCloseOverlay = (e: React.MouseEvent) => {
		if (overlayRef.current && e.target === overlayRef.current) {
			dispatch(closePopup())
		}
	}

	return (
		<StyledPopupOverlay
			active={active}
			onMouseDown={handleCloseOverlay}
			ref={overlayRef}
		>
			<StyledPopupOverlayHOCWrapper active={active}>
				<Content
					editing={editing}
					key={nanoid()}
				/>
			</StyledPopupOverlayHOCWrapper>
		</StyledPopupOverlay>
	)
}

export default PopupOverlay
