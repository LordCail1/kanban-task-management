import BoardManagerPopupUserInputListItem from "../BoardManagerPopupUserInputListItem/BoardManagerPopupUserInputListItem"
import StyledBoardManagerPopupUserInputList from "./BoardManagerPopupUserInputList.styled"
import { UseFormRegister, FieldArrayWithId, FieldErrors, UseFieldArrayRemove } from "react-hook-form"
import StyledBoardManagerPopupUserInputListTitle from "../BoardManagerPopupUserInputListTitle/BoardManagerPopupUserInputListTitle.styled"

const BoardManagerPopupUserInputList = ({
	columnFields,
	errors,
	register,
	remove,
	title,
}: UserInput & {
	columnFields: FieldArrayWithId<BoardManagerPopupWindowFormData>[]
	errors: FieldErrors<BoardManagerPopupWindowFormData>
	register: UseFormRegister<BoardManagerPopupWindowFormData>
	remove: UseFieldArrayRemove
}) => {
	return (
		<StyledBoardManagerPopupUserInputList>
			<StyledBoardManagerPopupUserInputListTitle>{title}</StyledBoardManagerPopupUserInputListTitle>

			{columnFields.map((field, index) => (
				<BoardManagerPopupUserInputListItem
					placeHolder="e.g Todo"
					key={field.id}
					register={register}
					index={index}
					errors={errors}
					remove={remove}
					field={field}
				/>
			))}
		</StyledBoardManagerPopupUserInputList>
	)
}

export default BoardManagerPopupUserInputList
