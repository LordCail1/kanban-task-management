import { ComponentType } from "react"
import BoardManagerPopupWindow from "../../components/PopupOverlay/BoardManagerPopupWindow/BoardManagerPopupWindow"
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu"
import TaskManagerViewerPopupWindow from "../../components/PopupOverlay/TaskManagerViewerPopupWindow/TaskManagerViewerPopupWindow"
import TaskManagerCreatorPopupWindow from "../../components/PopupOverlay/TaskManagerCreatorPopupWindow/TaskManagerCreatorPopupWindow"

/**
 * this custom hook takes in a string that represents the name of a possible component and returns the component itself
 * @param component strings that represent the name of components.
 * @returns a component with the type of {editing: boolean} mataching the string that was passed in the 'component' argument
 */
const useGetComponentFromString = (component: HOCComponents): ComponentType<any> => {
	switch (component) {
		case "BoardManagerPopupWindow":
			return BoardManagerPopupWindow
		case "DropdownMenu":
			return DropdownMenu
		case "TaskManagerPopupWindow":
			return TaskManagerViewerPopupWindow
		case "TaskManagerCreatorPopupWindow":
			return TaskManagerCreatorPopupWindow
		default:
			return BoardManagerPopupWindow
	}
}

export default useGetComponentFromString
