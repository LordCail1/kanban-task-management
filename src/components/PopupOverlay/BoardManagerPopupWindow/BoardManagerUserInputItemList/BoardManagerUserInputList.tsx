import BoardManagerUserInputListItem from "../BoardManagerUserInputListItem/BoardManagerUserInputItem"
import StyledBoardManagerUserInputList from "./BoardManagerUserInputList.styled"
import { UseFormRegister, FieldArrayWithId, FieldErrors, UseFieldArrayRemove } from "react-hook-form"
import StyledBoardManagerUserInputListTitle from "../BoardManagerUserInputListTitle/BoardManagerUserInputListTitle.styled"

const BoardManagerUserInputList = ({
	errors,
	columnFields,
	register,
	remove,
	title,
}: UserInput & {
	register: UseFormRegister<BoardManagerPopupWindowFormData>
	columnFields: FieldArrayWithId<BoardManagerPopupWindowFormData>[]
	errors: FieldErrors<BoardManagerPopupWindowFormData>
	remove: UseFieldArrayRemove
}) => {
	return (
		<StyledBoardManagerUserInputList>
			<StyledBoardManagerUserInputListTitle>{title}</StyledBoardManagerUserInputListTitle>

			{columnFields.map((field, index) => (
				<BoardManagerUserInputListItem
					placeHolder="e.g Todo"
					key={field.id}
					register={register}
					index={index}
					errors={errors}
					remove={remove}
					field={field}
				/>
			))}
		</StyledBoardManagerUserInputList>
	)
}

export default BoardManagerUserInputList
