import { useState } from "react"
import StyledGeneralStatusDropdown from "./GeneralStatusDropdown/GeneralStatusDropdown.styled"
import StyledGeneralStatusDropdownDisplay from "./GeneralStatusDropdown/GeneralStatusDropdownDisplay/GeneralStatusDropdownDisplay.styled"
import StyledGeneralStatusDropdownItem from "./GeneralStatusDropdown/GeneralStatusDropdownItem/GeneralStatusDropdownItem.styled"
import StyledTaskManagerViewerPopupStatusDropdownDisplayName from "./GeneralStatusDropdownDisplayName/GeneralStatusDropdownDisplayName.styled"
import GeneralStatusDropdownDisplayArrow from "./GeneralStatusDropdownDisplayArrow/GeneralStatusDropdownDisplayArrow"
import { useAppDispatch } from "../../../../hooks/redux/reduxHooks"
import { switchTaskFromColumn } from "../../../../features"

/**
 * this is a custom dropdown menu created. I say 'custom' beause it re-creates what a regular
 * dropdown menu would do, but with better styling.
 * @param listOfColumns This is also known as 'status'. This is a list of all the columns that
 * belong to the current board the user is on.
 * @param thisColumn This is the column in which the current selected task belongs to.
 * this value will also determine what the 'status' is in the dropdown
 * @param id the id of the current task that is on screen
 */
const GeneralStatusDropdown = ({ listOfColumns, thisColumn, id: thisTaskId }: { listOfColumns: Column[]; thisColumn: Column; id: string }) => {
	const dispatch = useAppDispatch()
	const [activated, setActivated] = useState(false)
	return (
		<StyledGeneralStatusDropdownDisplay onClick={() => setActivated((preValue) => !preValue)}>
			<StyledTaskManagerViewerPopupStatusDropdownDisplayName>{thisColumn.name}</StyledTaskManagerViewerPopupStatusDropdownDisplayName>
			<GeneralStatusDropdownDisplayArrow />
			<StyledGeneralStatusDropdown activated={activated}>
				{listOfColumns.map((column) => (
					<StyledGeneralStatusDropdownItem
						key={column.id}
						onClick={() => dispatch(switchTaskFromColumn({ thisColumn, thisTaskId, newColumnId: column.id }))}
					>
						{column.name}
					</StyledGeneralStatusDropdownItem>
				))}
			</StyledGeneralStatusDropdown>
		</StyledGeneralStatusDropdownDisplay>
	)
}

export default GeneralStatusDropdown
