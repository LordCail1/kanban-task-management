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
	const isPopupOpne = useAppSelector((state) => state.popupSlice.value.active)
	const component = useAppSelector((state) => state.popupSlice.value.component)

	return (
		<ThemeProvider theme={mergedTheme}>
			<GlobalStyle />
			<Sidebar />
			<StyledRightSideContainer>
				<Navbar />
				<Main />
			</StyledRightSideContainer>
			<PopupOverlay active={isPopupOpne} content={component}/>
		</ThemeProvider>
	)
}

export default App
