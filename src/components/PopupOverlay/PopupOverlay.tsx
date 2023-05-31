import React, { useRef } from "react"
import StyledPopupOverlay from "./PopupOverlay.styled"
import { useAppDispatch } from "../../hooks/redux/reduxHooks"
import { closePopup } from "../../features"
import { nanoid } from "nanoid"
import StyledPopupOverlayHOCWrapper from "./PopupOverlayHOCWrapper.styled"

const PopupOverlay = ({
	active,
	component: Component,
	editing,
}: {
	active: boolean
	component: React.ComponentType<{ editing: boolean }>
	editing: boolean
}) => {
	const dispatch = useAppDispatch()
	const overlayRef = useRef<HTMLDivElement>(null)
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
				<Component
					editing={editing}
					key={nanoid()}
				/>
			</StyledPopupOverlayHOCWrapper>
		</StyledPopupOverlay>
	)
}

export default PopupOverlay
