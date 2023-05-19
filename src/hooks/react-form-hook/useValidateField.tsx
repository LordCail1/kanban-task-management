import { FieldError } from "react-hook-form"

//Takes in the FieldError, and returns if valid or nto

type useValidateField = {
	isFieldValid: boolean
}

const useValidateField = (props: string | undefined): useValidateField => {
	if (props) {
		return { isFieldValid: false }
	} else {
		return { isFieldValid: true }
	}
}

export default useValidateField
