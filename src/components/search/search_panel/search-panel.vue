﻿
<template>
    <v-card height="100%" width="256" class="mx-auto">
        <v-form @submit="submit" ref="form" v-model="request" :lazy-validation="lazy">
            <v-container>
                <v-subheader class="font-weight-bold ma-n1 mb-n6 header">Kalorie:</v-subheader>
                <v-row class="ma-0">
                    <v-col>
                        <v-text-field color="teal" label="od" class="v-label v-input"
                                      type="number" v-model="calories.lowerLimit"
                                      :rules="rules.numberInputRules"/>
                    </v-col>
                    <v-col>
                        <v-text-field color="teal" label="do" class="v-label v-input"
                                      type="number" v-model="calories.upperLimit"
                                      :rules="rules.numberInputRules"/>
                    </v-col>
                </v-row>

                <v-subheader class="font-weight-bold ma-n1 mb-n6 header">Białko:</v-subheader>
                <v-row class="ma-0">
                    <v-col>
                        <v-text-field color="teal" label="od" class="v-label v-input"
                                      type="number" v-model="protein.lowerLimit"
                                      :rules="rules.numberInputRules"/>
                    </v-col>
                    <v-col>
                        <v-text-field color="teal" label="do" class="v-label v-input"
                                      type="number" v-model="protein.upperLimit"
                                      :rules="rules.numberInputRules"/>
                    </v-col>
                </v-row>

                <v-subheader class="font-weight-bold ma-n1 mb-n6 header">Węglowodany:</v-subheader>
                <v-row class="ma-0">
                    <v-col>
                        <v-text-field color="teal" label="od" class="v-label v-input"
                                      type="number" v-model="carbohydrates.lowerLimit"
                                      :rules="rules.numberInputRules"/>
                    </v-col>
                    <v-col>
                        <v-text-field color="teal" label="do" class="v-label v-input"
                                      type="number" v-model="carbohydrates.upperLimit"
                                      :rules="rules.numberInputRules"/>
                    </v-col>
                </v-row>

                <v-subheader class="font-weight-bold ma-n1 mb-n6 header">Tłuszcz:</v-subheader>
                <v-row class="ma-0">
                    <v-col>
                        <v-text-field color="teal" label="od" class="v-label v-input"
                                      type="number" v-model="fat.lowerLimit"
                                      :rules="rules.numberInputRules"/>
                    </v-col>
                    <v-col>
                        <v-text-field color="teal" label="do" class="v-label v-input"
                                      type="number" v-model="fat.upperLimit"
                                      :rules="rules.numberInputRules"/>
                    </v-col>
                </v-row>
            </v-container>
            <v-container class="mt-n8 mb-10">
                <v-subheader class="font-weight-bold ma-n1 mb-n6">Alergeny:</v-subheader>
                <v-col>
                    <v-checkbox label="Mleko krowie" class="mb-n8 v-label v-check-input" color="teal"
                                v-model="allergens.milk"/>
                    <v-checkbox label="Jaja kurze" class="mb-n8 v-label v-check-input" color="teal"
                                v-model="allergens.eggs"/>
                    <v-checkbox label="Pszenica" class="mb-n8 v-label v-check-input" color="teal"
                                v-model="allergens.wheat"/>
                    <v-checkbox label="Ryby i skorupiaki" class="mb-n8 v-label v-check-input" color="teal"
                                v-model="allergens.shellfish"/>
                    <v-checkbox label="Soja" class="mb-n8 v-label v-check-input" color="teal"
                                v-model="allergens.soy"/>
                    <v-checkbox label="Orzechy" class="mb-n8 v-label v-check-input" color="teal"
                                v-model="allergens.nuts"/>
                </v-col>
                <v-subheader class="font-weight-bold ma-n1 mb-n6">Dodatkowe wymagania:</v-subheader>
                <v-col>
                    <v-checkbox label="Z produktów wegetariańskich" class="mb-n8 v-label v-check-input" color="teal"
                                v-model="requirements.forVegetarian"/>
                    <v-checkbox label="Z produktów wegańskich" class="mb-n8 v-label v-check-input" color="teal"
                                v-model="requirements.forVegan"/>
                    <v-checkbox label="Z produktów ekologicznych" class="mb-n8 v-label v-check-input" color="teal"
                                v-model="requirements.ecological"/>
                </v-col>
                <!--                <search-meal-type @valueChanged="updateMealTypes"></search-meal-type>-->
            </v-container>
            <v-container class="ma-2">
                <div v-if="errors.length" class="error--text error-message mt-n8 mb-8 ml-1">
                    <b>Popraw poniższe błędy:</b>
                    <ul>
                        <li v-for="error in errors">{{ error }}</li>
                    </ul>
                </div>
            </v-container>
            <v-list-item>
                <v-list-item-content class="ma-2 mt-n8">
                    <v-btn class="white--text mb-2" type="submit" color="teal">Szukaj</v-btn>
                    <v-btn class="white--text" @click="clear" color="teal">Wyczyść</v-btn>
                </v-list-item-content>
            </v-list-item>
        </v-form>
    </v-card>

</template>

<script>
    export default {
        name: "search-panel",
        components: {},
        data: () => ({
            lazy: true,
            errors: [],
            calories: {
                lowerLimit: null,
                upperLimit: null,
            },
            carbohydrates: {
                macroNutrient: 'Carbohydrates',
                lowerLimit: null,
                upperLimit: null,
            },
            fat: {
                macroNutrient: 'Protein',
                lowerLimit: null,
                upperLimit: null,
            },
            protein: {
                macroNutrient: 'Fat',
                lowerLimit: null,
                upperLimit: null,
            },
            allergens: {
                milk: false,
                eggs: false,
                wheat: false,
                shellfish: false,
                soy: false,
                nuts: false,
            },
            requirements: {
                forVegan: false,
                forVegetarian: false,
                ecological: false
            },
            mealTypes: {
                breakfast: false,
                dinner: false,
                supper: false,
                snack: false,
                sweets: false,
            },
            request: {},
            rules: {
                numberInputRules: [v => isValidNumber(v) || 'Wartość musi być liczbą większą od zera.'],
            },
        }),

        computed: {
            requirementsAsEnum: function () {
                return [{requirement: this.requirements.forVegan, value: 1},
                    {requirement: this.requirements.forVegetarian, value: 2},
                    {requirement: this.requirements.ecological, value: 4}]
            },

            requirementsValue: function () {
                return this.requirementsAsEnum
                    .filter(x => x.requirement)
                    .map(x => x.value)
                    .reduce((acc, el) => acc + el, null)
            },

            allergensAsEnum: function () {
                return [{allergen: this.allergens.milk, value: 1},
                    {allergen: this.allergens.eggs, value: 2},
                    {allergen: this.allergens.shellfish, value: 4},
                    {allergen: this.allergens.soy, value: 8},
                    {allergen: this.allergens.nuts, value: 16}]
            },

            allergensValue: function () {
                return this.allergensAsEnum
                    .filter(x => x.allergen)
                    .map(x => x.value)
                    .reduce((acc, el) => acc + el, null)
            },

            macroNutrients: function () {
                return [{macroNutrient: this.protein, multiplication: 4},
                    {macroNutrient: this.carbohydrates, multiplication: 4},
                    {macroNutrient: this.fat, multiplication: 9}]
            },

            maxMacroNutrientsAreFullyField: function () {
                return this.macroNutrients
                    .filter(x => x.macroNutrient.upperLimit)
                    .length === 3
            },

            minCaloriesFromProvidedMacroNutrients: function () {
                return this.macroNutrients
                    .filter(x => x.macroNutrient.lowerLimit)
                    .map(x => x.macroNutrient.lowerLimit * x.multiplication)
                    .reduce((acc, el) => acc + el, 0)
            },

            maxCaloriesFromProvidedMacroNutrients: function () {
                return this.macroNutrients
                    .filter(x => x.macroNutrient.upperLimit)
                    .map(x => x.macroNutrient.upperLimit * x.multiplication)
                    .reduce((acc, el) => acc + el, 0)
            },

            caloriesLowerLimitIsValid: function () {
                if (this.maxMacroNutrientsAreFullyField)
                    return this.calories.lowerLimit <= this.maxCaloriesFromProvidedMacroNutrients;
                return true;
            },

            caloriesUpperLimitIsValid: function () {
                if (this.calories.upperLimit)
                    return this.calories.upperLimit >= this.minCaloriesFromProvidedMacroNutrients;
                return true;
            },

            minToMaxMacroNutrientProportionAreValid: function () {
                if (this.maxMacroNutrientsAreFullyField)
                    return this.minCaloriesFromProvidedMacroNutrients <= this.maxCaloriesFromProvidedMacroNutrients;
                return true;
            }
        },

        methods: {
            submit() {
                event.preventDefault();
                if (!this.validate()) {
                    event.preventDefault();
                    return;
                }
                this.request = this.buildRequest();
                //TODO: Call api
                console.log(this.request);
            },

            buildRequest() {
                return {
                    requirements: this.requirementsValue,
                    notAllowedAllergens: this.allergensValue,
                    allowedMealTypes: null,
                    caloriesLowerLimit: this.calories.lowerLimit,
                    caloriesUpperLimit: this.calories.upperLimit,
                    macroNutrientQuantity: this.macroNutrients
                        .map(x => x.macroNutrient)
                }
            },

            validate() {
                this.errors = [];
                if (!this.$refs.form.validate())
                    return false;
                return this.validateCalories();
            },

            validateCalories() {
                if (!this.caloriesUpperLimitIsValid)
                    this.errors.push('Podana maksymalna ilość kalorii jest mniejsza niż ta wynikajaca z podanych makroskładników.');

                if (!this.caloriesLowerLimitIsValid)
                    this.errors.push("Podana minimalna ilość kalori jest większa niż ta wynikająca z podanych makroskładników. \n" +
                        "Zmniejsz minimalną ilość kalori, lub zwiększ ilość makroskładników.");

                if (!this.minToMaxMacroNutrientProportionAreValid)
                    this.errors.push('Kalorie wynikające z podanej maksymalnej ilości makroskładników ' +
                        'są mniejsze niż te wynikające z minimalnej ilości makroskładników.');

                return !this.errors.length;
            },
            
            clear() {
                this.errors = [];
                this.$refs.form.reset();
                this.$refs.searchInput.clear();
            },
        }
    }

    function isValidNumber(v) {
        if (v != null) {
            return !isNaN(v) && v >= 0;
        }
        return true;
    }

</script>

<style scoped>
    .error-message {
        font-size: .8rem !important;
    }

    .v-label >>> label {
        font-size: .8rem;
    }

    .v-check-input >>> div ::before {
        margin-top: -6px;
        margin-bottom: 6px;
    }

    .v-input {
        font-size: .9rem !important;
    }
</style>