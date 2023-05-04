import { configureStore } from "@reduxjs/toolkit"
import { themeSliceReducer } from "../features/index"

export const store = configureStore({
	reducer: {
		themeSlice: themeSliceReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
