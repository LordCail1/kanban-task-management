import React, { useRef } from "react"
import StyledPopupOverlay from "./PopupOverlay.styled"
import { useAppDispatch } from "../../hooks/redux/reduxHooks"
import { closePopup } from "../../features"

const PopupOverlay = ({ active, content: Content }: Popup) => {
	const dispatch = useAppDispatch()
	const overlayRef = useRef<HTMLDivElement>(null)

	const handleCloseOverlay = (e: React.MouseEvent) => {
		if (overlayRef.current && e.target === overlayRef.current) {
			dispatch(closePopup())
		}
	}

	return (
		<>
			<StyledPopupOverlay
				active={active}
				onMouseDown={handleCloseOverlay}
				ref={overlayRef}
			>
				{Content && <Content />}
			</StyledPopupOverlay>
		</>
	)
}

export default PopupOverlay
