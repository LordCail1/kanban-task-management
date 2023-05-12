import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles"
import Main from "./components/Main/Main"
import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"
import StyledRightSideContainer from "./styles/RightSideContainer.styled"
import { useAppSelector } from "./hooks/redux/reduxHooks"
import { theme } from "./styles/Global"
import PopupOverlay from "./components/PopupOverlay/PopupOverlay"

function App() {
	const themeStyle = useAppSelector((state) => state.themeSlice)
	const mergedTheme = { ...theme, ...themeStyle }
	const isPopUpOpen = useAppSelector((state) => state.popupSlice.value)

	return (
		<ThemeProvider theme={mergedTheme}>
			<GlobalStyle />
			<Sidebar />
			<StyledRightSideContainer>
				<Navbar />
				<Main />
			</StyledRightSideContainer>
			<PopupOverlay active={isPopUpOpen} />
		</ThemeProvider>
	)
}

export default App
