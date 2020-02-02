export {asEnum, getValue}

const asEnum = function (requirements) {
    return [{requirement: requirements.forVegan},
        {requirement: requirements.forVegetarian},
        {requirement: requirements.ecological}]
};

const getValue = function (requirementsAsEnum) {
    return requirementsAsEnum
        .filter(x => x.requirement.value)
        .map(x => x.requirement.name)
        .join(', ')
};