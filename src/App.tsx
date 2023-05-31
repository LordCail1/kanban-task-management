import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles"
import Main from "./components/Main/Main"
import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"
import StyledRightSideContainer from "./styles/RightSideContainer.styled"
import { useAppSelector } from "./hooks/redux/reduxHooks"
import { theme } from "./styles/Global.styled"
import PopupOverlay from "./components/PopupOverlay/PopupOverlay"
import { useState } from "react"
import useGetComponentFromString from "./hooks/custom/useGetComponentFromString"

function App() {
	const { component: currentComponentString, editing } = useAppSelector(
		(state) => state.popupSlice.value
	)
	const component = useGetComponentFromString(currentComponentString)

	const themeStyle = useAppSelector((state) => state.themeSlice)
	const mergedTheme = { ...theme, ...themeStyle }
	const isPopupOpen = useAppSelector((state) => state.popupSlice.value.active)
	const [isColumnsEmpty, setIsColumnsEmpty] = useState<boolean>(false)

	return (
		<ThemeProvider theme={mergedTheme}>
			<GlobalStyle />
			<StyledRightSideContainer>
				<Navbar isColumnsEmpty={isColumnsEmpty} />
				<Main setIsColumnsEmpty={setIsColumnsEmpty} />
				<Sidebar />
			</StyledRightSideContainer>
			<PopupOverlay
				active={isPopupOpen}
				component={component}
				editing={editing}
			/>
		</ThemeProvider>
	)
}

export default App
