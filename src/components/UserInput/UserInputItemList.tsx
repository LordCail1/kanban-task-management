import { useAppSelector } from "../../hooks/redux/reduxHooks"
import UserInputItem from "./UserInputItem"
import StyledUserInputItemList from "./UserInputItemList.styled"
import StyledUserInputTitle from "./UserInputTitle.styled"
import { UseFormRegister } from "react-hook-form"

const UserInputItemList = ({ title, register }: UserInput & { register: UseFormRegister<MyFormData> }) => {
	const columnRows = useAppSelector(
		(state) => state.addNewBoardSlice.value.createBoardColumnNames
	)

	return (
		<StyledUserInputItemList>
			<StyledUserInputTitle>{title}</StyledUserInputTitle>

			{columnRows.map((column, index) => (
				<UserInputItem
					placeHolder="e.g Todo"
					key={column.id}
					id={column.id}
					register={register}
					index={index}
				/>
			))}
		</StyledUserInputItemList>
	)
}

export default UserInputItemList
