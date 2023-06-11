import { createSlice } from "@reduxjs/toolkit"

type InitialState = {
	value: {
		active: boolean
		component: KebabMenuComponents
        mode: "board" | "task"
	}
}

const initialState: InitialState = {
    value: {
        active: false,
        component: "KebabMenu",
        mode: "board"
    }
}


const kebabMenuSlice = createSlice({
    name: "kebabMenu_slice",
    initialState,
    reducers: {
        openKebabMenu: (state) => {
            return state
        }
    }
})

export const {openKebabMenu} = kebabMenuSlice.actions
export default kebabMenuSlice.reducer
