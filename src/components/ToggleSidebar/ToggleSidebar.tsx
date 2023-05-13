import { useDispatch } from "react-redux"
import ToggleSidebarIcon from "../Icon/ToggleSidebarIcon"
import StyledToggleSidebar from "./ToggleSidebar.styled"
import { activateSidebar, deActivateSidebar } from "../../features"
import { useAppSelector } from "../../hooks/redux/reduxHooks"

const ToggleSidebar = () => {
	const dispatch = useDispatch()
	const sidebarActivated = useAppSelector((state) => state.sidebarSlice.active)

	return (
		<>
			<StyledToggleSidebar onClick={() => sidebarActivated ? dispatch(deActivateSidebar()) : dispatch(activateSidebar())}>
				<ToggleSidebarIcon />
				Hide Sidebar
			</StyledToggleSidebar>
		</>
	)
}

export default ToggleSidebar
