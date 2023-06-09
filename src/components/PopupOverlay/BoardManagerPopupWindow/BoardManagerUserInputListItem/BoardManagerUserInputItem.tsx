import useValidateField from "../../../../hooks/react-form-hook/useValidateField"
import CrossIcon from "../../../Icon/CrossIcon/CrossIcon"
import StyledBoardManagerUserInputListItemInputBox from "../BoardManagerUserInputListItemInputBox/BoardManagerUserInputListItemInputBox.styled"
import StyledBoardManagerUserInputListItem from "./BoardManagerUserInputListItem.styled"
import { UseFormRegister, FieldErrors, UseFieldArrayRemove, FieldArrayWithId } from "react-hook-form"



const BoardManagerUserInputListItem = ({
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
	const { isFieldValid } = useValidateField(errors.columns?.[index]?.columnName?.message)

	return (
		<StyledBoardManagerUserInputListItem>
			<StyledBoardManagerUserInputListItemInputBox
				placeholder={placeHolder}
				valid={isFieldValid}
				type="text"
				{...register(`columns.${index}.columnName`)}
				defaultValue={field.columnName}
			/>
			<CrossIcon
				height={15}
				width={15}
				index={index}
				remove={remove}
			/>
		</StyledBoardManagerUserInputListItem>
	)
}

export default BoardManagerUserInputListItem
