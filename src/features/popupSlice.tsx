import { PayloadAction, createSlice } from "@reduxjs/toolkit"

// Define the initial state of the popup slice
type InitialState = {
    value: {
        active: boolean
        component: HOCComponents
    }
}

// Set the initial state of the popup slice
const initialState: InitialState = {
    value: {
        active: false,
        component: "AddNewBoardPopupWindow",
    },
}

// Create the popup slice
const popupSlice = createSlice({
    name: "popup_slice",
    initialState,
    reducers: {
        // Define the openPopup reducer
        openPopup: (state, action: PayloadAction<HOCComponents>) => {
            state.value.active = true
            state.value.component = action.payload
        },
        // Define the closePopup reducer
        closePopup: (state) => {
            state.value.active = false 
        },
    },
})

// Export the openPopup and closePopup actions
export const { openPopup, closePopup } = popupSlice.actions

// Export the popupSlice reducer
export default popupSlice.reducer