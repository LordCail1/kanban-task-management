import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles"
import Main from "./components/Main/Main"
import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"
import { theme } from "./styles/Global"
import StyledRightSideContainer from "./styles/RightSideContainer.styled"
import { Provider } from "react-redux"
import { store } from "./store/configureStore"

export type ThemeColor = "dark" | "light"

function App() {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Sidebar />
				<StyledRightSideContainer>
					<Navbar />
					<Main />
				</StyledRightSideContainer>
			</ThemeProvider>
		</Provider>
	)
}

export default App
