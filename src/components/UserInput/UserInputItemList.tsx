import { useAppSelector } from "../../hooks/redux/reduxHooks"
import UserInputItem from "./UserInputItem"
import StyledUserInputItemList from "./UserInputItemList.styled"
import StyledUserInputTitle from "./UserInputTitle.styled"

const UserInputItemList = ({ title }: UserInput) => {
	const columnRows = useAppSelector(
		(state) => state.addNewBoardSlice.value.createBoardColumnNames
	)

	return (
		<StyledUserInputItemList>
			<StyledUserInputTitle>{title}</StyledUserInputTitle>

			{columnRows.map((column) => (
				<UserInputItem
					placeHolder="e.g Todo"
					key={column.id}
					id={column.id}
				/>
			))}
		</StyledUserInputItemList>
	)
}

export default UserInputItemList
