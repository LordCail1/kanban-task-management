import BoardManagerUserInputItem from "./BoardManagerUserInputItem"
import StyledBoardManagerUserInputItemList from "./BoardManagerUserInputItemList.styled"
import StyledBoardManagerUserInputTitle from "./BoardManagerUserInputTitle.styled"
import { UseFormRegister, FieldArrayWithId, FieldErrors, UseFieldArrayRemove } from "react-hook-form"

const BoardManagerUserInputItemList = ({
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
		<StyledBoardManagerUserInputItemList>
			<StyledBoardManagerUserInputTitle>{title}</StyledBoardManagerUserInputTitle>

			{columnFields.map((field, index) => (
				<BoardManagerUserInputItem
					placeHolder="e.g Todo"
					key={field.id}
					register={register}
					index={index}
					errors={errors}
					remove={remove}
					field={field}
				/>
			))}
		</StyledBoardManagerUserInputItemList>
	)
}

export default BoardManagerUserInputItemList
