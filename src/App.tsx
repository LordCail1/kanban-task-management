import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles"
import Main from "./components/Main/Main"
import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"
import StyledRightSideContainer from "./styles/RightSideContainer.styled"
import { useAppSelector } from "./hooks/redux/reduxHooks"
import { theme } from "./styles/Global"
import PopupOverlay from "./components/PopupOverlay/PopupOverlay"
import AddNewBoardPopupWindow from "./components/PopupOverlay/AddNewBoardPopupWindow/AddNewBoardPopupWindow"

function App() {
	const themeStyle = useAppSelector((state) => state.themeSlice)
	const mergedTheme = { ...theme, ...themeStyle }
	const isPopupOpne = useAppSelector(
		(state) => state.popupSlice.value.active
	)
	const component = useAppSelector((state) => state.popupSlice.value.component)

	const getCurrentComponent = (component: HOCComponents) => {
		if (component === "AddNewBoardPopupWindow") return AddNewBoardPopupWindow
	}

	const currentComponent = getCurrentComponent(component)


	return (
		<ThemeProvider theme={mergedTheme}>
			<GlobalStyle />
			<Sidebar />
			<StyledRightSideContainer>
				<Navbar />
				<Main />
			</StyledRightSideContainer>
			<PopupOverlay
				active={isPopupOpne}
				content={currentComponent}
			/>
		</ThemeProvider>
	)
}

export default App
