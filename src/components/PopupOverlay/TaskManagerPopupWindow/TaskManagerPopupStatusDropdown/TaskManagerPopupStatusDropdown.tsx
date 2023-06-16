import { useAppDispatch } from "../../../../hooks/redux/reduxHooks"
import { useState } from "react"
import GeneralStatusDropdownDisplayArrow from "../../General/GeneralStatusDropdownDisplayArrow"
import StyledTaskManagerPopupStatusDropdown from "./TaskManagerPopupStatusDropdown.styled"
import StyledTaskManagerPopupStatusDropdownDisplay from "./TaskManagerPopupStatusDropdownDisplay/TaskManagerPopupStatusDropdownDisplay.styled"
import StyledTaskManagerPopupStatusDropdownDisplayName from "./TaskManagerPopupStatusDropdownDisplayName/TaskManagerPopupStatusDropdownDisplayName.styled"
import StyledTaskManagerPopupStatusDropdownItem from "./TaskManagerPopupStatusDropdownItem/TaskManagerPopupStatusDropdownItem.styled"

const TaskManagerPopupStatusDropdown = ({
	value,
	onChange,
	listOfColumns,
}: {
	value: Column
	onChange: (...event: any[]) => void
	listOfColumns: Column[]
}) => {
	const dispatch = useAppDispatch()
	const [activated, setActivated] = useState(false)

	return (
		<StyledTaskManagerPopupStatusDropdownDisplay onClick={() => setActivated((preValue) => !preValue)}>
			<StyledTaskManagerPopupStatusDropdownDisplayName>{value.name}</StyledTaskManagerPopupStatusDropdownDisplayName>
			<GeneralStatusDropdownDisplayArrow />
			<StyledTaskManagerPopupStatusDropdown activated={activated}>
				{listOfColumns.map((column: Column) => (
					<StyledTaskManagerPopupStatusDropdownItem
						key={column.id}
						onClick={() => onChange(column)}
					>
						{column.name}
					</StyledTaskManagerPopupStatusDropdownItem>
				))}
			</StyledTaskManagerPopupStatusDropdown>
		</StyledTaskManagerPopupStatusDropdownDisplay>
	)
}

export default TaskManagerPopupStatusDropdown
