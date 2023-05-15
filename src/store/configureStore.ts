import { configureStore } from "@reduxjs/toolkit"
import {
	themeSliceReducer,
	boardSliceReducer,
	popupSliceReducer,
	sidebarSliceReducer,
	addNewBoardSliceReducer
} from "../features/index"

export const store = configureStore({
	reducer: {
		themeSlice: themeSliceReducer,
		boardSlice: boardSliceReducer,
		popupSlice: popupSliceReducer,
		sidebarSlice: sidebarSliceReducer,
		addNewBoardSlice: addNewBoardSliceReducer
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
