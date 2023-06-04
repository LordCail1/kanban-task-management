import { ComponentType } from "react"
import BoardManagerPopupWindow from "../../components/PopupOverlay/BoardManagerPopupWindow/BoardManagerPopupWindow"
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu"

/**
 * this custom hook takes in a string that represents the name of a possible component and returns the component itself
 * @param component strings that represent the name of components.
 * @returns a component with the type of {editing: boolean} mataching the string that was passed in the 'component' argument
 */
const useGetComponentFromString = (component: HOCComponents): ComponentType<{ editing: boolean }> => {
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

/**
 * BoardManagerPopupWindow
 *
 * This component allows the user to
 * 1-create/delete boards and columns
 * 2-update/delete boards and columns
 *
 *
 *
 *
 * DropdownMenu
 *
 * This component is a compact version of the sidebar.
 * It is used when the screen is smaller than a certain amount,
 * and is triggered by the dropdown arrow
 */
