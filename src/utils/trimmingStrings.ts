function trimmingStrings(str: string): string {
	const stringArray = str.split(" ")
	const stringArrayWithoutSpace = stringArray.filter(
		(string) => string !== ""
	)
	return stringArrayWithoutSpace.join(" ")
}

export default trimmingStrings
