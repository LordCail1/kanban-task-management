import useValidateField from "../../hooks/react-form-hook/useValidateField"
import StyledCrossIcon from "../Icon/CrossIcon.styled"
import StyledUserInputBoxShort from "./UserInputBoxShort.styled"
import StyledUserInputItem from "./UserInputItem.styled"
import {
	UseFormRegister,
	FieldErrors,
	UseFieldArrayRemove,
	FieldArrayWithId,
} from "react-hook-form"

const UserInputItem = ({
	errors,
	index,
	placeHolder,
	register,
	remove,
	field,
	fields,
}: UserInput & {
	index: number
	register: UseFormRegister<AddNewBoardPopupWindowFormData>
	errors: FieldErrors<AddNewBoardPopupWindowFormData>
	remove: UseFieldArrayRemove
	field: FieldArrayWithId<AddNewBoardPopupWindowFormData>
	fields: FieldArrayWithId<AddNewBoardPopupWindowFormData>[]
}) => {
	const { isFieldValid } = useValidateField(
		errors.columns?.[index]?.columnName?.message
	)

	return (
		<StyledUserInputItem>
			<StyledUserInputBoxShort
				placeholder={placeHolder}
				valid={isFieldValid}
				type="text"
				{...register(`columns.${index}.columnName`)}
				defaultValue={field.columnName}
			/>
			<StyledCrossIcon
				onClick={() => remove(index)}
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
