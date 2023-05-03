import React from "react"
import StyledSidebar from "./Sidebar.styled"
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks"
import { changeThemeStyle } from "../../features/themeSlice"

const Sidebar: React.FC<{ themeColor: "dark" | "light" }> = ({
	themeColor,
}) => {
	const themeStyle = useAppSelector((state) => state)
	const dispatch = useAppDispatch()
	return (
		<>
			<StyledSidebar themeColor={themeStyle.value}>
				<button onClick={() => dispatch(changeThemeStyle())}>Change Theme</button>
			</StyledSidebar>
		</>
	)
}

export default Sidebar
