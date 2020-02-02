﻿
<template>
    <v-card height="100%" width="256" class="mx-auto">
        <v-form ref="form" :lazy-validation="lazy">
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
                                v-model="allergens.milk.value"/>
                    <v-checkbox label="Jaja kurze" class="mb-n8 v-label v-check-input" color="teal"
                                v-model="allergens.eggs.value"/>
                    <v-checkbox label="Pszenica" class="mb-n8 v-label v-check-input" color="teal"
                                v-model="allergens.wheat.value"/>
                    <v-checkbox label="Ryby i skorupiaki" class="mb-n8 v-label v-check-input" color="teal"
                                v-model="allergens.shellfish.value"/>
                    <v-checkbox label="Soja" class="mb-n8 v-label v-check-input" color="teal"
                                v-model="allergens.soy.value"/>
                    <v-checkbox label="Orzechy" class="mb-n8 v-label v-check-input" color="teal"
                                v-model="allergens.nuts.value"/>
                </v-col>
                <v-subheader class="font-weight-bold ma-n1 mb-n6">Dodatkowe wymagania:</v-subheader>
                <v-col>
                    <v-checkbox label="Z produktów wegetariańskich" class="mb-n8 v-label v-check-input" color="teal"
                                v-model="requirements.forVegetarian.value"/>
                    <v-checkbox label="Z produktów wegańskich" class="mb-n8 v-label v-check-input" color="teal"
                                v-model="requirements.forVegan.value"/>
                    <v-checkbox label="Z produktów ekologicznych" class="mb-n8 v-label v-check-input" color="teal"
                                v-model="requirements.ecological.value"/>
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
                    <v-btn class="white--text mb-2" @click="submit" color="teal">Szukaj</v-btn>
                    <v-btn class="white--text" @click="clear" color="teal">Wyczyść</v-btn>
                </v-list-item-content>
            </v-list-item>
        </v-form>
    </v-card>

</template>

<script>
    import axios from 'axios';
    import * as enums from '../../../app/enums/enums.js'
    import * as allergenService from '../../../app/services/allergenService.js'
    import * as requirementsService from '../../../app/services/requirementService'
    import * as macroNutrientService from "../../../app/services/macroNutrientService"
    import * as caloriesService from '../../../app/services/caloriesService'

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
                macroNutrient: enums.macroNutrients.CARBOHYDRATE,
                lowerLimit: null,
                upperLimit: null,
            },
            fat: {
                macroNutrient: enums.macroNutrients.PROTEIN,
                lowerLimit: null,
                upperLimit: null,
            },
            protein: {
                macroNutrient: enums.macroNutrients.FAT,
                lowerLimit: null,
                upperLimit: null,
            },
            allergens: {
                milk: {
                    name: enums.allergens.MILK,
                    value: false
                },
                eggs: {
                    name: enums.allergens.EGGS,
                    value: false
                },
                wheat: {
                    name: enums.allergens.WHEAT,
                    value: false
                },
                shellfish: {
                    name: enums.allergens.SHELLFISH,
                    value: false
                },
                soy: {
                    name: enums.allergens.SOY,
                    value: false
                },
                nuts: {
                    name: enums.allergens.NUTS,
                    value: false
                },
            },
            requirements: {
                forVegan: {
                    name: enums.requirements.FORVEGAN,
                    value: false
                },
                forVegetarian: {
                    name: enums.requirements.FORVEGETARIAN,
                    value: false
                },
                ecological: {
                    name: enums.requirements.ECOLOGICAL,
                    value: false
                }
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
            requirementsValue: function () {
                return requirementsService.getValue(requirementsService.asEnum(this.requirements))
            },
            allergensValue: function () {
                return allergenService.getValue(allergenService.asEnum(this.allergens))
            },
            macroNutrients: function () {
                return macroNutrientService.get(this.protein, this.carbohydrates, this.fat)
            },
            maxMacroNutrientsAreFullyField: function () {
                return macroNutrientService.maxMacroNutrientsAreFullyField(this.macroNutrients)
            },
            minCaloriesFromProvidedMacroNutrients: function () {
                return macroNutrientService.minCaloriesFromProvidedMacroNutrients(this.macroNutrients)
            },
            maxCaloriesFromProvidedMacroNutrients: function () {
                return macroNutrientService.maxCaloriesFromProvidedMacroNutrients(this.macroNutrients)
            },
            minToMaxMacroNutrientProportionAreValid: function () {
                return macroNutrientService.minToMaxMacroNutrientProportionAreValid(
                    this.maxMacroNutrientsAreFullyField, this.minCaloriesFromProvidedMacroNutrients, this.maxCaloriesFromProvidedMacroNutrients)
            },
            caloriesLowerLimitIsValid: function () {
                return caloriesService.lowerLimitIsValid(
                    this.maxMacroNutrientsAreFullyField, this.maxCaloriesFromProvidedMacroNutrients, this.calories.lowerLimit)
            },
            caloriesUpperLimitIsValid: function () {
                return caloriesService.upperLimitIsValid(this.calories.upperLimit, this.minCaloriesFromProvidedMacroNutrients)
            },
        },

        methods: {
            async submit() {
                if (!this.validate()) {
                    event.preventDefault();
                    return;
                }
                this.request = this.buildRequest();
                const response = await axios({
                    url: 'https://localhost:5001/api/recipedetails/findrecipedetails',
                    method: 'post',
                    data: JSON.stringify(this.request),
                    headers: {'Content-Type': 'application/json'}
                });
            },

            buildRequest() {
                return {
                    requirements: this.requirementsValue,
                    notAllowedAllergens: this.allergensValue,
                    allowedMealTypes: null,
                    caloriesLowerLimit: this.calories.lowerLimit,
                    caloriesUpperLimit: this.calories.upperLimit,
                    macroNutrientsQuantity: this.getMacroNutrients()
                }
            },

            getMacroNutrients() {
                if (!this.macroNutrients)
                    return new [];
                console.log(this.macroNutrients);
                return this.macroNutrients
                    .map(x => x.macroNutrient)
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