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

function App() {
	const themeStyle = useAppSelector((state) => state.themeSlice)
	const mergedTheme = { ...theme, ...themeStyle }
	const isPopupOpen = useAppSelector(
		(state) => state.popupSlice.value.active
	)
	const [isColumnsEmpty, setIsColumnsEmpty] = useState<boolean>(false);
	



	return (
		<ThemeProvider theme={mergedTheme}>
			<GlobalStyle />
			<StyledRightSideContainer>
				<Navbar isColumnsEmpty={isColumnsEmpty}/>
				<Main setIsColumnsEmpty={setIsColumnsEmpty}/>
				<Sidebar />
			</StyledRightSideContainer>
			<PopupOverlay
				active={isPopupOpen}
			/>
		</ThemeProvider>
	)
}

export default App
