import React, { useEffect, useRef } from "react"
import StyledPopupOverlay from "./PopupOverlay.styled"
import { useAppDispatch } from "../../hooks/redux/reduxHooks"
import { togglePopup } from "../../features"
import AddNewBoardPopupWindow from "./AddNewBoardPopupWindow/AddNewBoardPopupWindow"




const PopupOverlay: React.FC<{ active: boolean }> = ({ active }) => {
	const dispatch = useAppDispatch()
	const overlayRef = useRef<HTMLDivElement>(null)

	

	const handleCloseOverlay = (e: React.MouseEvent) => {
		if (overlayRef.current && e.target === overlayRef.current) {
			dispatch(togglePopup())
		}
	}






	return (
		<>
			<StyledPopupOverlay
				active={active}
				onClick={handleCloseOverlay}
				ref={overlayRef}
			>
				<AddNewBoardPopupWindow />
			</StyledPopupOverlay>
		</>
	)
}

export default PopupOverlay
