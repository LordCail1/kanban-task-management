import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles"
import Main from "./components/Main/Main"
import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"
import { theme } from "./styles/Global"
import StyledRightSideContainer from "./styles/RightSideContainer.styled"
import { useState } from "react"
import { Provider } from "react-redux"
import { store } from "./store/configureStore"

export type ThemeColor = "dark" | "light"

function App() {
	const [themeColor, setThemeColor] = useState<ThemeColor>("dark")
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Sidebar themeColor={themeColor} />
				<StyledRightSideContainer>
					<Navbar />
					<Main />
				</StyledRightSideContainer>
			</ThemeProvider>
		</Provider>
	)
}

export default App
