import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type InitialState = {
	value: {
		active: boolean
		component: HOCComponents
		editing: boolean
	}
}

const initialState: InitialState = {
	value: {
		active: false,
		component: "BoardManagerPopupWindow",
		editing: false,
	},
}

const popupSlice = createSlice({
	name: "popup_slice",
	initialState,
	reducers: {
		// Define the openPopup reducer
		openPopup: (state, action: PayloadAction<{ HOCComponent: HOCComponents; editing: boolean }>) => {
			state.value.active = true
			state.value.component = action.payload.HOCComponent
			state.value.editing = action.payload.editing
		},
		// Define the closePopup reducer
		closePopup: (state) => {
			state.value.active = false
			state.value.editing = false
		},
	},
})

export const { openPopup, closePopup } = popupSlice.actions

export default popupSlice.reducer
