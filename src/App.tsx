import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles"
import Main from "./components/Main/Main"
import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"
import StyledAppContainer from "./styles/StyledAppContainer.styled"
import { useAppSelector } from "./hooks/redux/reduxHooks"
import { theme } from "./styles/Global.styled"
import PopupOverlay from "./components/PopupOverlay/PopupOverlay"
import { useState } from "react"
import useGetComponentFromString from "./hooks/custom/useGetComponentFromString"


function App() {
	
	const { component: currentComponentString, editing, id } = useAppSelector((state) => state.popupSlice.value)
	const component = useGetComponentFromString(currentComponentString)

	const themeStyle = useAppSelector((state) => state.themeSlice)
	const isPopupOpen = useAppSelector((state) => state.popupSlice.value.active)
	const mergedTheme = { ...theme, ...themeStyle }
	//state that manages if there are columns in the <Main/> section at the moment, or if there are none.
	const [isColumnsEmpty, setIsColumnsEmpty] = useState(false)

	return (
		<ThemeProvider theme={mergedTheme}>
			<GlobalStyle />
			<StyledAppContainer>
				<Navbar isColumnsEmpty={isColumnsEmpty} />
				<Main setIsColumnsEmpty={setIsColumnsEmpty} />
				<Sidebar />
			</StyledAppContainer>
			<PopupOverlay
				active={isPopupOpen}
				component={component}
				editing={editing}
				id={id}
			/>
		</ThemeProvider>
	)
}

export default App
