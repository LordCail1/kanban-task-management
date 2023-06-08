import { PayloadAction, createSlice } from "@reduxjs/toolkit"

/**
 * @param value.active boolean value representing if the popup is currently active or not
 * @param value.component a string value representing a React component
 * @param editing boolean value representing if the invoked popup is for editing or not
 * @param id this is an optional id that could be used if the goal is for editing something
 */
type InitialState = {
	value: {
		active: boolean
		component: HOCComponents
		editing: boolean
		id?: string
	}
}

const initialState: InitialState = {
	value: {
		active: false,
		component: "BoardManagerPopupWindow",
		editing: false,
		id: "",
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
		openPopupWithId: (state, action: PayloadAction<{ HOCComponent: HOCComponents; editing: boolean; id: string }>) => {
			const { HOCComponent, editing, id } = action.payload
			state.value.active = true
			state.value.component = HOCComponent
			state.value.editing = editing
			state.value.id = id
		},
		// Define the closePopup reducer
		closePopup: (state) => {
			state.value.active = false
			state.value.editing = false
			state.value.id = ""
		},
	},
})

export const { openPopup, closePopup, openPopupWithId } = popupSlice.actions

export default popupSlice.reducer
