import { PayloadAction, createSlice } from "@reduxjs/toolkit"

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
		openPopupWithId: (state, action: PayloadAction<{ HOCComponent: HOCComponents; editing: boolean, id: string }>) => {
			const {HOCComponent, editing, id}  = action.payload
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
