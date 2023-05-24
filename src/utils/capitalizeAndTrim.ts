import trimmingStrings from "./trimmingStrings";
import capitalizeWords from "./capitalizeWords";


function capitalizeAndTrim(str: string): string {
    const firstStep = trimmingStrings(str)
    return capitalizeWords(firstStep)
}

export default capitalizeAndTrim