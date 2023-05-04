import React from "react"
import StyledSidebar from "./Sidebar.styled"
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks"
import { changeThemeStyle } from "../../features/themeSlice"

const Sidebar = () => {
	const themeStyle = useAppSelector((state) => state.value)
	const dispatch = useAppDispatch()
	return (
		<>
			<StyledSidebar themeColor={themeStyle}>
				<button onClick={() => dispatch(changeThemeStyle())}>Change Theme</button>
			</StyledSidebar>
		</>
	)
}

export default Sidebar
