import { configureStore } from "@reduxjs/toolkit"
import {
	themeSliceReducer,
	boardsSliceReducer,
	popupSliceReducer,
	sidebarSliceReducer,
	columnsSliceReducer,
	tasksSliceReducer, 
	dropDownSliceReducer,
	editingBoardSliceReducer
} from "../features/index"

export const store = configureStore({
	reducer: {
		themeSlice: themeSliceReducer,
		boardsSlice: boardsSliceReducer,
		popupSlice: popupSliceReducer,
		sidebarSlice: sidebarSliceReducer,
		columnsSlice: columnsSliceReducer,
		tasksSlice: tasksSliceReducer, 
		dropdownSlice: dropDownSliceReducer,
		editingBoardSlice: editingBoardSliceReducer
	},
	
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
