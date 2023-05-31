import { ComponentType } from "react"
import BoardManagerPopupWindow from "../../components/PopupOverlay/BoardManagerPopupWindow/BoardManagerPopupWindow"
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu"


const useGetComponentFromString = (
	component: HOCComponents
): ComponentType<{ editing: boolean }> => {
	switch (component) {
		case "BoardManagerPopupWindow":
			return BoardManagerPopupWindow
		case "DropdownMenu":
			return DropdownMenu
		default:
			return BoardManagerPopupWindow
	}
}

export default useGetComponentFromString
