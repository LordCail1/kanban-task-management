import StyledKanbanLogo from "./KanbanLogo.styled"
import kanbanLogoDark from "../../assets/logo-dark.svg"
import kanbanLogoLight from "../../assets/logo-light.svg"
import { useAppSelector } from "../../hooks/reduxHooks"

const KanbanLogo = () => {
	const themeStyle = useAppSelector((state) => state.themeSlice.style)
	return (
		<StyledKanbanLogo
			src={themeStyle === "dark" ? kanbanLogoLight : kanbanLogoDark}
		/>
	)
}

export default KanbanLogo
