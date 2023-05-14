import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import React from "react"
import AddNewBoardPopupWindow from "../components/PopupOverlay/AddNewBoardPopupWindow/AddNewBoardPopupWindow"

export type InitialState = {
	value: {
		active: boolean
		component: HOCComponents
	}
}

const initialState: InitialState = {
	value: {
		active: false,
		component: "AddNewBoardPopupWindow",
	},
}

const popupSlice = createSlice({
	name: "popup_slice",
	initialState,
	reducers: {
		openPopup: (state, action: PayloadAction<HOCComponents>) => {
			state.value.active = true
			state.value.component = action.payload
		},
		closePopup: (state) => {
			state.value.active = false
		},
	},
})

export const { openPopup, closePopup } = popupSlice.actions
export default popupSlice.reducer
