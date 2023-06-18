import React, { useRef } from "react"
import StyledPopupOverlay from "./PopupOverlay.styled"
import { useAppDispatch } from "../../hooks/redux/reduxHooks"
import { closePopup } from "../../features"
import { nanoid } from "nanoid"
import StyledPopupOverlayHOCWrapper from "./PopupOverlayHOCWrapper.styled"

/**
 * This component is responsible for holding all other popup windows in mid-air in the center of the screen. It has a
 * black background with a dimmed opacity
 * @param active boolean state that represents if popup is in 'active' state or not
 * @param component React component that is being passed
 * @param editing boolean state that represents if poup is in an 'editing' mode or not
 * @param id an id value that is possibly passed
 */
const PopupOverlay = ({
	active,
	component: Component,
	editing,
	id,
	style
}: {
	active: boolean
	component: React.ComponentType<{ editing: boolean; id?: string, style?: DeletePopupStyle }>
	editing: boolean
	id?: string
	style?: DeletePopupStyle
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
					id={id}
					style={style}
				/>
			</StyledPopupOverlayHOCWrapper>
		</StyledPopupOverlay>
	)
}

export default PopupOverlay
