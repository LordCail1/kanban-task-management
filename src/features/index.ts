export { default as themeSliceReducer } from "./themeSlice"
export { changeThemeStyle } from "./themeSlice"

export { default as boardSliceReducer } from "./boardsSlice"
export { addBoard } from "./boardsSlice"

export type {
	board,
	column,
	boardData as data,
	initialState,
	subtask,
	task,
} from "./boardsSlice"
