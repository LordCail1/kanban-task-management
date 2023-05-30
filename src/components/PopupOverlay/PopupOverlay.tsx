import React, { useRef } from "react"
import StyledPopupOverlay from "./PopupOverlay.styled"
import { useAppDispatch, useAppSelector } from "../../hooks/redux/reduxHooks"
import { closePopup } from "../../features"
import useGetComponentFromString from "../../hooks/custom/useGetComponentFromString"

const PopupOverlay = ({ active }: { active: boolean }) => {
	const dispatch = useAppDispatch()
	const overlayRef = useRef<HTMLDivElement>(null)
	const currentComponentString = useAppSelector((state) => state.popupSlice.value.component)
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
			<Content />
		</StyledPopupOverlay>
	)
}

export default PopupOverlay
