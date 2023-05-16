function minimumLength<T extends string | unknown[]>(value: T, minimum = 3) {
	if (value.length < minimum) return false
	return true
}

export default minimumLength
