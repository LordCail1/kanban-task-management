const capitalizeWords = (words: string) => {
	const separatedWords = words.split(" ")

	for (let i = 0; i < separatedWords.length; i++) {
		const word = separatedWords[i]
		separatedWords[i] = word.charAt(0).toUpperCase() + word.slice(1)
	}
	return separatedWords.join(" ")
}

export default capitalizeWords
