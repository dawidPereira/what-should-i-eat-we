export {asEnum, getValue}

const asEnum = function (allergens) {
    return [{allergen: allergens.milk},
        {allergen: allergens.eggs},
        {allergen: allergens.shellfish},
        {allergen: allergens.soy},
        {allergen: allergens.nuts}]
};

const getValue = function (allergensAsEnum) {
    return allergensAsEnum
        .filter(x => x.allergen.value)
        .map(x => x.allergen.name)
        .join(', ')
};