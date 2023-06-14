import { useAppDispatch } from "../../../../hooks/redux/reduxHooks"
import { useState } from "react"
import GeneralStatusDropdownDisplayArrow from "../../General/GeneralStatusDropdownDisplayArrow"
import StyledTaskManagerPopupStatusDropdown from "./TaskManagerPopupStatusDropdown.styled"
import StyledTaskManagerPopupStatusDropdownDisplay from "./TaskManagerPopupStatusDropdownDisplay/TaskManagerPopupStatusDropdownDisplay.styled"
import StyledTaskManagerPopupStatusDropdownDisplayName from "./TaskManagerPopupStatusDropdownDisplayName/TaskManagerPopupStatusDropdownDisplayName.styled"
import StyledTaskManagerPopupStatusDropdownItem from "./TaskManagerPopupStatusDropdownItem/TaskManagerPopupStatusDropdownItem.styled"

const TaskManagerPopupStatusDropdown = ({ value, onChange }: { value: Column[]; onChange: (...event: any[]) => void }) => {
	const dispatch = useAppDispatch()
	const [activated, setActivated] = useState(false)

	return (
		<StyledTaskManagerPopupStatusDropdownDisplay onClick={() => setActivated((preValue) => !preValue)}>
			<StyledTaskManagerPopupStatusDropdownDisplayName></StyledTaskManagerPopupStatusDropdownDisplayName>
			<GeneralStatusDropdownDisplayArrow />
			<StyledTaskManagerPopupStatusDropdown activated={activated}>
				<StyledTaskManagerPopupStatusDropdownItem></StyledTaskManagerPopupStatusDropdownItem>
			</StyledTaskManagerPopupStatusDropdown>
		</StyledTaskManagerPopupStatusDropdownDisplay>
	)
}

export default TaskManagerPopupStatusDropdown
