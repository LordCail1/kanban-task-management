import CrossIcon from "../../../../Icon/CrossIcon/CrossIcon"
import StyledTaskManagerPopupUserInputListItem from "./TaskManagerPopupUserInputListItem.styled"
import StyledTaskManagerPopupUserInputListItemInputBox from "./TaskManagerPopupUserInputListItemInputBox/TaskManagerPopupUserInputListItemInputBox.styled"

const TaskManagerPopupUserInputListItem = () => {
	return (
		<StyledTaskManagerPopupUserInputListItem>
			<StyledTaskManagerPopupUserInputListItemInputBox valid={true}></StyledTaskManagerPopupUserInputListItemInputBox>
			<CrossIcon
				height={15}
				width={15}
                index={4}
			/>
		</StyledTaskManagerPopupUserInputListItem>
	)
}

export default TaskManagerPopupUserInputListItem
