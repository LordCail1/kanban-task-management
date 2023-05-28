import { configureStore } from "@reduxjs/toolkit"
import {
	themeSliceReducer,
	boardsSliceReducer,
	popupSliceReducer,
	sidebarSliceReducer,
	columnsSliceReducer,
	tasksSliceReducer, 
	dropDownSliceReducer
} from "../features/index"

export const store = configureStore({
	reducer: {
		themeSlice: themeSliceReducer,
		boardsSlice: boardsSliceReducer,
		popupSlice: popupSliceReducer,
		sidebarSlice: sidebarSliceReducer,
		columnsSlice: columnsSliceReducer,
		tasksSlice: tasksSliceReducer, 
		dropdownSlice: dropDownSliceReducer
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
