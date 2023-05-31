import { ComponentType } from "react"
import BoardManagerPopupWindow from "../../components/PopupOverlay/AddNewBoardPopupWindow/BoardManagerPopupWindow"
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu"

//default component is 'AddNewBoardPopupWindow'

const useGetComponentFromString = (
	component: HOCComponents
): ComponentType<{ editing: boolean }> => {
	switch (component) {
		case "AddNewBoardPopupWindow":
			return BoardManagerPopupWindow
		case "DropdownMenu":
			return DropdownMenu
		default:
			return BoardManagerPopupWindow
	}
}

export default useGetComponentFromString
