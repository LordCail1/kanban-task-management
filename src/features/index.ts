export { changeThemeStyle } from "./themeSlice"
export { default as themeSliceReducer } from "./themeSlice"

export { addBoard } from "./boardsSlice"
export { default as boardSliceReducer } from "./boardsSlice"

export { openPopup, closePopup } from "./popupSlice"
export { default as popupSliceReducer } from "./popupSlice"

export { activateSidebar, deActivateSidebar } from "./sidebarSlice"
export { default as sidebarSliceReducer } from "./sidebarSlice"

export {
	// setBoardName,
	// setColumnRowName,
	addNewColumnRow,
	removeColumnRow,
	// validateFields
} from "./popupWindows/addNewBoardSlice"
export { default as createNewBoardSliceReducer } from "./popupWindows/addNewBoardSlice"
