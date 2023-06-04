import trimmingStrings from "./trimmingStrings";
import capitalizeWords from "./capitalizeWords";

/**
 * 
 * @param str string that needs to be trimmed and capitalized
 * @returns a version of the string that has the first letter of each word capitalized and has white spaces
 * before and after the words removed
 */
function capitalizeAndTrim(str: string): string {
    const firstStep = trimmingStrings(str)
    return capitalizeWords(firstStep)
}

export default capitalizeAndTrim