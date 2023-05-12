import { createSlice } from "@reduxjs/toolkit";

export type initialState = {
    value: boolean
}


const initialState: initialState = {
    value: false
}


const popupSlice = createSlice({
    name: "popup_slice",
    initialState,
    reducers: {
        togglePopup: (state) => {
            state.value = !state.value
        }
    }
})

export const { togglePopup } = popupSlice.actions
export default popupSlice.reducer