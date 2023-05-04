import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles"
import Main from "./components/Main/Main"
import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"
import StyledRightSideContainer from "./styles/RightSideContainer.styled"
import { useAppSelector } from "./hooks/reduxHooks"
import { theme } from "./styles/Global"

function App() {
	const themeStyle = useAppSelector((state) => state.themeSlice)

	const mergedTheme = {...theme, ...themeStyle}

	return (
			<ThemeProvider theme={mergedTheme}>
				<GlobalStyle />
				<Sidebar />
				<StyledRightSideContainer>
					<Navbar />
					<Main />
				</StyledRightSideContainer>
			</ThemeProvider>
	)
}

export default App
