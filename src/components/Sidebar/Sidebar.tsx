import React from "react"
import StyledSidebar from "./Sidebar.styled"

const Sidebar: React.FC<{themeColor: 'dark' | 'light'}> = ({themeColor}) => {
	return <StyledSidebar themeColor={themeColor}></StyledSidebar> 
} 

export default Sidebar
