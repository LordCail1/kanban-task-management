import { GlobalStyle } from "./styles"
import { theme } from "./styles/Global.styled"
import { ThemeProvider } from "styled-components"
import { useAppSelector } from "./hooks/redux/reduxHooks"
import { useState } from "react"
import Main from "./components/Main/Main"
import Navbar from "./components/Navbar/Navbar"
import PopupOverlay from "./components/PopupOverlay/PopupOverlay"
import Sidebar from "./components/Sidebar/Sidebar"
import StyledAppContainer from "./styles/StyledAppContainer.styled"
import useGetPopupHOCComponents from "./hooks/custom/useGetPopupHOCComponents"

function App() {
	const { component: currentComponentString, editing, id, active: isPopupActive, style } = useAppSelector((state) => state.popupSlice.value)
	const component = useGetPopupHOCComponents(currentComponentString)

	const themeStyle = useAppSelector((state) => state.themeSlice)
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
				active={isPopupActive}
				component={component}
				editing={editing}
				id={id}
				style={style}
			/>

		</ThemeProvider>
	)
}

export default App
