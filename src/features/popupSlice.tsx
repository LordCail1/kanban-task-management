import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import React from "react"
import AddNewBoardPopupWindow from "../components/PopupOverlay/AddNewBoardPopupWindow/AddNewBoardPopupWindow"

export type InitialState = {
	value: {
		active: boolean
		component: "AddNewBoardPopupWindow"
	}
}

const initialState: InitialState = {
	value: {
		active: false,
		component: "AddNewBoardPopupWindow"
	},
}

const popupSlice = createSlice({
	name: "popup_slice",
	initialState,
	reducers: {
		openPopup: (
			state,
			action: PayloadAction<HOCComponents>
		) => {
			if (!state.value.active) {
				state.value.active = true
                state.value.component = action.payload
			}
		},
		closePopup: (state) => {
			if (state.value.active) {
				state.value.active = false
			}
		},
	},
})

export const { openPopup, closePopup } = popupSlice.actions
export default popupSlice.reducer
