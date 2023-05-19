import UserInputItem from "./UserInputItem"
import StyledUserInputItemList from "./UserInputItemList.styled"
import StyledUserInputTitle from "./UserInputTitle.styled"
import {
	UseFormRegister,
	FieldArrayWithId,
	FieldErrors,
	UseFieldArrayRemove,
} from "react-hook-form"

const UserInputItemList = ({
	errors,
	fields,
	register,
	remove,
	title,
}: UserInput & {
	register: UseFormRegister<MyFormData>
	fields: FieldArrayWithId<MyFormData>[]
	errors: FieldErrors<MyFormData>
	remove: UseFieldArrayRemove
}) => {
	return (
		<StyledUserInputItemList>
			<StyledUserInputTitle>{title}</StyledUserInputTitle>

			{fields.map((field, index) => (
				<UserInputItem
					placeHolder="e.g Todo"
					key={field.id}
					register={register}
					index={index}
					errors={errors}
					remove={remove}
					field={field}
					fields={fields}
				/>
			))}
		</StyledUserInputItemList>
	)
}

export default UserInputItemList
