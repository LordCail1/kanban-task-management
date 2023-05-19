import { removeColumnRow } from "../../features"
import {
	useAppDispatch,
} from "../../hooks/redux/reduxHooks"
import StyledCrossIcon from "../Icon/CrossIcon.styled"
import StyledUserInputBoxShort from "./UserInputBoxShort.styled"
import StyledUserInputItem from "./UserInputItem.styled"
import { UseFormRegister } from "react-hook-form"

const UserInputItem = ({
	placeHolder,
	id,
	register,
	index
	
}: UserInput & { id: string, index: number, register: UseFormRegister<MyFormData> }) => {
	const dispatch = useAppDispatch()

	return (
		<StyledUserInputItem>
			<StyledUserInputBoxShort
				placeholder={placeHolder}
				valid={true}
				type="text"
				{...register(`columns.${index}.columnName`)}
			/>
			<StyledCrossIcon
				onClick={() => dispatch(removeColumnRow(id))}
				width="15"
				height="15"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g fillRule="evenodd">
					<path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z" />
					<path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z" />
				</g>
			</StyledCrossIcon>
		</StyledUserInputItem>
	)
}

export default UserInputItem
