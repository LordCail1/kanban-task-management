import { PayloadAction, createSlice } from "@reduxjs/toolkit"

// Define the initial state of the popup slice
type InitialState = {
    value: {
        active: boolean
        component: HOCComponents
        editing: boolean 
    }
}

// Set the initial state of the popup slice
const initialState: InitialState = {
    value: {
        active: false,
        component: "AddNewBoardPopupWindow",
        editing: false
    },
}

// Create the popup slice
const popupSlice = createSlice({
    name: "popup_slice",
    initialState,
    reducers: {
        // Define the openPopup reducer
        openPopup: (state, action: PayloadAction<{HOCComponent: HOCComponents, editing: boolean }>) => {
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

// Export the openPopup and closePopup actions
export const { openPopup, closePopup } = popupSlice.actions

// Export the popupSlice reducer
export default popupSlice.reducer