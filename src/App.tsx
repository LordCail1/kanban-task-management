import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles"
import Main from "./components/Main/Main"
import Navbar from "./components/Navbar/Navbar"
import SideBar from "./components/Sidebar/SideBar"

function App() {
	return (
		<>
			<Main />
			<Navbar />
			<SideBar />
		</>
	)
}

export default App
