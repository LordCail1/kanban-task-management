import { useAppSelector } from "../../hooks/redux/reduxHooks"
import UserInputItem from "./UserInputItem"
import StyledUserInputTitle from "./UserInputTitle.styled"

const UserInputItemList = ({ title }: UserInput) => {
	const columnRows = useAppSelector(
		(state) => state.addNewBoardSlice.value.boardColumns
	)

	return (
		<>
			<StyledUserInputTitle>{title}</StyledUserInputTitle>

			{columnRows.map((column) => (
				<UserInputItem placeHolder="e.g Todo" key={column.id} id={column.id}/>
			))}
		</>
	)
}

export default UserInputItemList
