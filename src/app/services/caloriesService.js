export {lowerLimitIsValid, upperLimitIsValid}

const lowerLimitIsValid = function (maxMacroNutrientsAreFullyField, maxCaloriesFromProvidedMacroNutrients, lowerLimit) {
    if (maxMacroNutrientsAreFullyField)
        return lowerLimit <= maxCaloriesFromProvidedMacroNutrients;
    return true;
};

const upperLimitIsValid = function (upperLimit, minCaloriesFromProvidedMacroNutrients) {
    if (upperLimit)
        return upperLimit >= minCaloriesFromProvidedMacroNutrients;
    return true;
};