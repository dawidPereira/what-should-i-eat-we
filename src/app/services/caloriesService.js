export {lowerLimitIsValid, upperLimitIsValid, minToMaxCaloriesAreValid}

const lowerLimitIsValid = function (maxMacroNutrientsAreFullyField, maxCaloriesFromProvidedMacroNutrients, lowerLimit) {
    if (maxMacroNutrientsAreFullyField)
        return !lowerLimit || lowerLimit <= maxCaloriesFromProvidedMacroNutrients;
    return true;
};

const upperLimitIsValid = function (upperLimit, minCaloriesFromProvidedMacroNutrients) {
    if (upperLimit)
        return +upperLimit >= +minCaloriesFromProvidedMacroNutrients;
    return true;
};

const minToMaxCaloriesAreValid = function (lowerLimit, upperLimit) {
    if (!lowerLimit || !upperLimit)
        return true;
    return +lowerLimit < +upperLimit;
};  