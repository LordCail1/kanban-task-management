import { useDispatch } from "react-redux"
import { useAppSelector } from "../../hooks/redux/reduxHooks"
import StyledToggleBtn from "./ToggleBtn.styled"
import { changeThemeStyle } from "../../features"

const ToggleBtn = () => {
	const theme = useAppSelector((state) => state.themeSlice.style)
	const dispatch = useDispatch()

	return (
		<StyledToggleBtn
			checked={theme}
			onClick={() => dispatch(changeThemeStyle())}
		/>
	)
}

export default ToggleBtn
