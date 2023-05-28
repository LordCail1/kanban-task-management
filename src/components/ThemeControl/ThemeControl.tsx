import MoonIcon from "../Icon/MoonIcon"
import SunIcon from "../Icon/SunIcon"
import ToggleBtn from "../ToggleBtn/ToggleBtn"
import StyledThemeControl from "./ThemeControl.styled"

const ThemeControl = ({ menuArea }: MenuArea) => {
	return (
		<StyledThemeControl menuArea={menuArea}>
			<SunIcon />
			<ToggleBtn />
			<MoonIcon />
		</StyledThemeControl>
	)
}

export default ThemeControl
