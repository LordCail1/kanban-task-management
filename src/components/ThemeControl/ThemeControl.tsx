import MoonIcon from "../Icon/MoonIcon"
import SunIcon from "../Icon/SunIcon"
import ToggleBtn from "../ToggleBtn/ToggleBtn"
import StyledThemeControl from "./ThemeControl.styled"

const ThemeControl = () => {
	
	return (
		<StyledThemeControl>
			<SunIcon />
			<ToggleBtn/>
			<MoonIcon />
		</StyledThemeControl>
	)
}

export default ThemeControl
