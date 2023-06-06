import { configureStore } from "@reduxjs/toolkit"
import {
	boardsSliceReducer,
	columnsSliceReducer,
	dropDownSliceReducer,
	editingBoardSliceReducer,
	popupSliceReducer,
	sidebarSliceReducer,
	subtaskSliceReducer,
	tasksSliceReducer,
	themeSliceReducer,
} from "../features/index"

export const store = configureStore({
	reducer: {
		boardsSlice: boardsSliceReducer,
		columnsSlice: columnsSliceReducer,
		dropdownSlice: dropDownSliceReducer,
		editingBoardSlice: editingBoardSliceReducer,
		popupSlice: popupSliceReducer,
		sidebarSlice: sidebarSliceReducer,
		subtaskSlice: subtaskSliceReducer,
		tasksSlice: tasksSliceReducer,
		themeSlice: themeSliceReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
