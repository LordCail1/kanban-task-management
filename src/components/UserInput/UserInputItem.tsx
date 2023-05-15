import { removeColumnRow, setColumnRowName } from "../../features"
import { useAppDispatch } from "../../hooks/redux/reduxHooks"
import StyledCrossIcon from "../Icon/CrossIcon.styled"
import StyledUserInputBoxShort from "./UserInputBoxShort.styled"
import StyledUserInputItemContainer from "./UserInputItemContainer.styled"

const UserInputItem = ({ placeHolder, id }: UserInput & { id: string }) => {
	const dispatch = useAppDispatch()
	return (
		<StyledUserInputItemContainer>
			<StyledUserInputBoxShort placeholder={placeHolder} onBlur={(e) => dispatch(setColumnRowName({id: id, name: e.target.value}))}/>
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
		</StyledUserInputItemContainer>
	)
}

export default UserInputItem
