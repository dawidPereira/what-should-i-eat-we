export {
    get,
    maxMacroNutrientsAreFullyField,
    minCaloriesFromProvidedMacroNutrients,
    maxCaloriesFromProvidedMacroNutrients,
    minToMaxMacroNutrientProportionAreValid
}

const get = function (protein, carbohydrates, fat) {
    return [{macroNutrient: protein, multiplication: 4},
        {macroNutrient: carbohydrates, multiplication: 4},
        {macroNutrient: fat, multiplication: 9}]
};

const maxMacroNutrientsAreFullyField = function (macroNutrients) {
    return macroNutrients
        .filter(x => x.macroNutrient.upperLimit)
        .length === 3
};

const minCaloriesFromProvidedMacroNutrients = function (macroNutrients) {
    return macroNutrients
        .filter(x => x.macroNutrient.lowerLimit)
        .map(x => x.macroNutrient.lowerLimit * x.multiplication)
        .reduce((acc, el) => acc + el, 0)
};

const maxCaloriesFromProvidedMacroNutrients = function macroNutrients(macroNutrients) {
    return macroNutrients
        .filter(x => x.macroNutrient.upperLimit)
        .map(x => x.macroNutrient.upperLimit * x.multiplication)
        .reduce((acc, el) => acc + el, 0)
};

const minToMaxMacroNutrientProportionAreValid = function (
    maxMacroNutrientsAreFullyField, 
    minCaloriesFromProvidedMacroNutrients, 
    maxCaloriesFromProvidedMacroNutrients) {
    if (maxMacroNutrientsAreFullyField)
        return minCaloriesFromProvidedMacroNutrients <= maxCaloriesFromProvidedMacroNutrients;
    return true;
};