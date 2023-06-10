import useValidateField from "../../../../hooks/react-form-hook/useValidateField"
import CrossIcon from "../../../Icon/CrossIcon/CrossIcon"
import StyledBoardManagerPopupUserInputListItemInputBox from "../BoardManagerPopupUserInputListItemInputBox/BoardManagerUserInputListItemInputBox.styled"
import StyledBoardManagerPopupUserInputListItem from "./BoardManagerPopupUserInputListItem.styled"
import { UseFormRegister, FieldErrors, UseFieldArrayRemove, FieldArrayWithId } from "react-hook-form"

const BoardManagerPopupUserInputListItem = ({
	errors,
	index,
	placeHolder,
	register,
	remove,
	field,
}: UserInput & {
	index: number
	register: UseFormRegister<BoardManagerPopupWindowFormData>
	errors: FieldErrors<BoardManagerPopupWindowFormData>
	remove: UseFieldArrayRemove
	field: FieldArrayWithId<BoardManagerPopupWindowFormData>
}) => {
	const { isFieldValid } = useValidateField(errors.columns?.[index]?.name?.message)

	return (
		<StyledBoardManagerPopupUserInputListItem>
			<StyledBoardManagerPopupUserInputListItemInputBox
				placeholder={placeHolder}
				valid={isFieldValid}
				type="text"
				{...register(`columns.${index}.name`)}
				defaultValue={field.name}
			/>
			<CrossIcon
				height={15}
				width={15}
				index={index}
				remove={remove}
			/>
		</StyledBoardManagerPopupUserInputListItem>
	)
}

export default BoardManagerPopupUserInputListItem
