import { useAppSelector } from "../../hooks/redux/reduxHooks"
import StyledMain from "./Main.styled"

const Main = () => {
	const sidebarActivated = useAppSelector(
		(state) => state.sidebarSlice.active
	)
	return <StyledMain activated={sidebarActivated}></StyledMain>
}

export default Main
