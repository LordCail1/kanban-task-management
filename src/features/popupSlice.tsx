import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import React from "react";
import AddNewBoardPopupWindow from "../components/PopupOverlay/AddNewBoardPopupWindow/AddNewBoardPopupWindow";

export type initialState = {
    value: boolean
    component: React.ComponentType<any>
}


const initialState: initialState = {
    value: false,
    component: AddNewBoardPopupWindow
}


const popupSlice = createSlice({
    name: "popup_slice",
    initialState,
    reducers: {
        openPopup: (state, action: PayloadAction<React.ComponentType<any>>) => {
            if (!state.value) {
                state.value = true
            } 
        },
        closePopup: (state) => {
            if (state.value) {
                state.value = false
            }
        }
    }
})

export const { openPopup, closePopup } = popupSlice.actions
export default popupSlice.reducer