import ToggleSidebarIcon from "../Icon/ToggleSidebarIcon"
import StyledToggleSidebar from "./ToggleSidebar.styled"
import { activateSidebar, deActivateSidebar } from "../../features"
import { useAppDispatch, useAppSelector } from "../../hooks/redux/reduxHooks"
import StyledToggleSidebarText from "./ToggleSidbarText.styled"
import { useDispatch } from "react-redux"

const ToggleSidebar = () => {
	const dispatch = useDispatch()
	const sidebarActivated = useAppSelector(
		(state) => state.sidebarSlice.active
	)

	return (
		<StyledToggleSidebar
			onClick={() =>
				sidebarActivated
					? dispatch(deActivateSidebar())
					: dispatch(activateSidebar())
			}
			activated={sidebarActivated}
		>
			<ToggleSidebarIcon activated={sidebarActivated} />
			
			<StyledToggleSidebarText activated={sidebarActivated}>Hide Sidebar</StyledToggleSidebarText>
		</StyledToggleSidebar>
	)
}

export default ToggleSidebar
