import { UseFormRegister, FieldArrayWithId, FieldErrors, UseFieldArrayRemove } from "react-hook-form"
import BoardManagerPopupUserInputListItem from "../BoardManagerPopupUserInputListItem/BoardManagerPopupUserInputListItem"
import StyledBoardManagerPopupUserInputList from "./BoardManagerPopupUserInputList.styled"
import StyledBoardManagerPopupUserInputListTitle from "../BoardManagerPopupUserInputListTitle/BoardManagerPopupUserInputListTitle.styled"

const BoardManagerPopupUserInputList = ({
	columnFields,//
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
					errors={errors}
					field={field}
					index={index}
					key={field.id}
					placeHolder="e.g Todo"
					register={register}
					remove={remove}
				/>
			))}
		</StyledBoardManagerPopupUserInputList>
	)
}

export default BoardManagerPopupUserInputList
