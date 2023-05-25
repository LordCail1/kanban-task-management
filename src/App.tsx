import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles"
import Main from "./components/Main/Main"
import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"
import StyledRightSideContainer from "./styles/RightSideContainer.styled"
import { useAppSelector } from "./hooks/redux/reduxHooks"
import { theme } from "./styles/Global"
import PopupOverlay from "./components/PopupOverlay/PopupOverlay"
import useGetComponentFromString from "./hooks/custom/useGetComponentFromString"

function App() {
	const themeStyle = useAppSelector((state) => state.themeSlice)
	const mergedTheme = { ...theme, ...themeStyle }
	const isPopupOpen = useAppSelector(
		(state) => state.popupSlice.value.active
	)
	const componentString = useAppSelector(
		(state) => state.popupSlice.value.component
	)

	const currentComponent = useGetComponentFromString(componentString)

	return (
		<ThemeProvider theme={mergedTheme}>
			<GlobalStyle />
				<StyledRightSideContainer>
					<Navbar />
					<Main />
					<Sidebar />
				</StyledRightSideContainer>
			<PopupOverlay
				active={isPopupOpen}
				content={currentComponent}
			/>
		</ThemeProvider>
	)
}

export default App
