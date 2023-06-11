import { ComponentType } from "react"
import BoardManagerPopupWindow from "../../components/PopupOverlay/BoardManagerPopupWindow/BoardManagerPopupWindow"
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu"
import TaskManagerViewerPopupWindow from "../../components/PopupOverlay/TaskManagerViewerPopupWindow/TaskManagerViewerPopupWindow"
import TaskManagerPopupWindow from "../../components/PopupOverlay/TaskManagerPopupWindow/TaskManagerPopupWindow"
import KebabMenu from "../../components/PopupOverlay/KebabMenu/KebabMenu"

/**
 * this custom hook takes in a string that represents the name of a possible component and returns the component itself
 * @param component strings that represent the name of components.
 * @returns a component with the type of {editing: boolean} mataching the string that was passed in the 'component' argument
 */
const useGetComponentFromString = (component: PopupHOCComponents): ComponentType<any> => {
	switch (component) {
		case "BoardManagerPopupWindow":
			return BoardManagerPopupWindow
		case "DropdownMenu":
			return DropdownMenu
		case "TaskManagerPopupWindow":
			return TaskManagerViewerPopupWindow
		case "TaskManagerCreatorPopupWindow":
			return TaskManagerPopupWindow
		case "KebabMenu":
			return KebabMenu
		default:
			return BoardManagerPopupWindow
	}
}

export default useGetComponentFromString
