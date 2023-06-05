import useValidateField from "../../../hooks/react-form-hook/useValidateField"
import StyledCrossIcon from "../../Icon/CrossIcon.styled"
import StyledBoardManagerUserInputBoxShort from "./BoardManagerUserInputBoxShort.styled"
import StyledBoardManagerUserInputItem from "./BoardManagerUserInputItem.styled"
import { UseFormRegister, FieldErrors, UseFieldArrayRemove, FieldArrayWithId } from "react-hook-form"

const BoardManagerUserInputItem = ({
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
		<StyledBoardManagerUserInputItem>
			<StyledBoardManagerUserInputBoxShort
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
		</StyledBoardManagerUserInputItem>
	)
}

export default BoardManagerUserInputItem
