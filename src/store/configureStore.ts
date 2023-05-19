import { configureStore } from "@reduxjs/toolkit"
import {
	themeSliceReducer,
	boardSliceReducer,
	popupSliceReducer,
	sidebarSliceReducer,
	columnSliceReducer,
} from "../features/index"

export const store = configureStore({
	reducer: {
		themeSlice: themeSliceReducer,
		boardSlice: boardSliceReducer,
		popupSlice: popupSliceReducer,
		sidebarSlice: sidebarSliceReducer,
		columnSlice: columnSliceReducer
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
