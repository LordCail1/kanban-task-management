import { configureStore } from "@reduxjs/toolkit"
import {
	themeSliceReducer,
	boardSliceReducer,
	popupSliceReducer,
	sidebarSliceReducer,
} from "../features/index"

export const store = configureStore({
	reducer: {
		themeSlice: themeSliceReducer,
		boardSlice: boardSliceReducer,
		popupSlice: popupSliceReducer,
		sidebarSlice: sidebarSliceReducer
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
