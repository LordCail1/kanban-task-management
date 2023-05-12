import { configureStore } from "@reduxjs/toolkit"
import { themeSliceReducer } from "../features/index"
import { boardSliceReducer } from "../features/index"
import { popupSliceReducer } from "../features/index"

export const store = configureStore({
	reducer: {
		themeSlice: themeSliceReducer,
		boardSlice: boardSliceReducer,
		popupSlice: popupSliceReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
