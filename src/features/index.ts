export { changeThemeStyle } from "./themeSlice"
export { default as themeSliceReducer } from "./themeSlice"

export { addBoard, selectBoard, updateBoard, deleteBoard } from "./boardsSlice"
export { default as boardsSliceReducer } from "./boardsSlice"

export { openPopup, closePopup, openPopupWithId, openDeletePopup } from "./popupSlice"
export { default as popupSliceReducer } from "./popupSlice"

export { activateSidebar, deActivateSidebar } from "./sidebarSlice"
export { default as sidebarSliceReducer } from "./sidebarSlice"

export { addColumnsEdit as addColumns, updateColumns, deleteColumns, addColumnsCreate, switchTaskFromColumn, updateTasksArray } from "./columnsSlice"
export { default as columnsSliceReducer } from "./columnsSlice"

export { addTask, deleteTask, updateSubtasksArray, updateTask } from "./task/tasksSlice"
export { default as tasksSliceReducer } from "./task/tasksSlice"

export { activateDropdown, deActivateDropdown } from "./dropdownMenuSlice"
export { default as dropDownSliceReducer } from "./dropdownMenuSlice"

export { setEditableBoard } from "./editingBoardSlice"
export { default as editingBoardSliceReducer } from "./editingBoardSlice"

export { addSubtasks, checkSubtask, updateSubtasks } from "./subtaskSlice"
export { default as subtaskSliceReducer } from "./subtaskSlice"
