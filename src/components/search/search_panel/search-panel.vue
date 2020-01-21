﻿
<template>
    <v-card
            height="100%"
            width="256"
            class="mx-auto"
    >
        <v-form @submit="submit" ref="form">
            <search-input @valueChanged="updateInputs" ref="searchInput"></search-input>
            <v-container class="mt-n8">
                <search-allergens @valueChanged="updateAllergens"></search-allergens>
                <search-requirements @valueChanged="updateRequirements"></search-requirements>
                <search-meal-type @valueChanged="updateMealTypes"></search-meal-type>
            </v-container>
            <v-container class="ma-2">
                <div v-if="errors.length" class="error--text error-message mt-n8 mb-8 ml-1">
                    <b>Popraw poniższe błędy:</b>
                    <ul>
                        <li v-for="error in errors">{{ error }}</li>
                    </ul>
                </div>
            </v-container>
            <v-list-item >
                <v-list-item-content class="ma-2 mt-n12">
                    <v-btn class="white--text mb-2" type="submit" color="teal">Szukaj</v-btn>
                    <v-btn class="white--text" @click="clear" color="teal">Wyczyść</v-btn>
                </v-list-item-content>
            </v-list-item>
        </v-form>
    </v-card>

</template>

<script>
    import TealTextField from "@/components/search/teal-text-field";
    import RangeSliderInput from "@/components/search/search_panel/range-slider-input";
    import SearchColumn from "@/components/search/search_panel/search-column";
    import SearchInput from "@/components/search/search_panel/search-input";
    import SearchCheckbox from "@/components/search/search_panel/search-checkbox";
    import SearchAllergens from "@/components/search/search_panel/search-allergens";
    import SearchRequirements from "@/components/search/search_panel/search-requirements";
    import SearchMealType from "@/components/search/search_panel/search-meal-type";

    export default {
        name: "search-panel",
        components: {
            SearchMealType,
            SearchRequirements,
            SearchAllergens, SearchCheckbox, SearchInput, SearchColumn, RangeSliderInput, TealTextField
        },
        validations: {},
        data: () => ({
            items: [
                {title: 'Dashboard', icon: 'mdi-view-dashboard'},
                {title: 'Photos', icon: 'mdi-image'},
                {title: 'About', icon: 'mdi-help-box'},
            ],
            errors: {
                type: Array,
                default: []
            },
            request: {
                calories: {
                    lowerLimit: Number,
                    upperLimit: Number,
                },
                carbohydrates: {
                    lowerLimit: Number,
                    upperLimit: Number
                },
                fat: {
                    lowerLimit: Number,
                    upperLimit: Number
                },
                protein: {
                    lowerLimit: Number,
                    upperLimit: Number
                },
                allergens: {
                    milk: Boolean,
                    eggs: Boolean,
                    wheat: Boolean,
                    shellfish: Boolean,
                    soy: Boolean,
                    nuts: Boolean,
                },
                requirements: {
                    forVegan: Boolean,
                    forVegetarian: Boolean,
                    ecological: Boolean
                },
                mealTypes: {
                    breakfast: Boolean,
                    dinner: Boolean,
                    supper: Boolean,
                    snack: Boolean,
                    sweets: Boolean,
                },
            },
            right: null,
        }),
        methods: {
            updateInputs(value) {
                this.request.calories.lowerLimit = value.calories.lowerLimit;
                this.request.calories.upperLimit = value.calories.upperLimit;
                this.request.protein.lowerLimit = value.protein.lowerLimit;
                this.request.protein.upperLimit = value.protein.upperLimit;
                this.request.carbohydrates.lowerLimit = value.carbohydrates.lowerLimit;
                this.request.carbohydrates.upperLimit = value.carbohydrates.upperLimit;
                this.request.fat.lowerLimit = value.fat.lowerLimit;
                this.request.fat.upperLimit = value.fat.upperLimit;
            },
            updateAllergens(value) {
                this.request.allergens.milk = value.allergens.milk;
                this.request.allergens.eggs = value.allergens.eggs;
                this.request.allergens.wheat = value.allergens.wheat;
                this.request.allergens.shellfish = value.allergens.shellfish;
                this.request.allergens.soy = value.allergens.soy;
                this.request.allergens.nuts = value.allergens.nuts;
            },
            updateRequirements(value) {
                this.request.requirements.forVegetarian = value.requirements.forVegetarian;
                this.request.requirements.forVegan = value.requirements.forVegan;
                this.request.requirements.ecological = value.requirements.ecological;
            },
            updateMealTypes(value) {
                this.request.mealTypes.breakfast = value.mealTypes.breakfast;
                this.request.mealTypes.dinner = value.mealTypes.dinner;
                this.request.mealTypes.supper = value.mealTypes.supper;
                this.request.mealTypes.snack = value.mealTypes.snack;
                this.request.mealTypes.sweets = value.mealTypes.sweets;
            },
            submit: function (e) {
                this.validate(e);
            },

            validate(e) {
                this.errors = [];
                if (this.request.calories.upperLimit) {
                    let caloriesFromMacro = (this.request.carbohydrates.upperLimit * 4) + (this.request.protein.upperLimit * 4) + (this.request.fat.upperLimit * 9);
                    if (caloriesFromMacro > this.request.calories.upperLimit) {
                        this.errors.push('Ilość kalorii jest mniejsza niż ta wynikajaca z podanych makroskładników.');
                        e.preventDefault();
                    }
                }
                if (!this.inputsAreValid()) {
                    e.preventDefault();
                }
            },
            inputsAreValid() {
                return this.validateInput(this.request.calories.lowerLimit)
                    && this.validateInput(this.request.calories.upperLimit)
                    && this.validateInput(this.request.protein.lowerLimit)
                    && this.validateInput(this.request.protein.upperLimit)
                    && this.validateInput(this.request.carbohydrates.lowerLimit)
                    && this.validateInput(this.request.carbohydrates.upperLimit)
                    && this.validateInput(this.request.fat.lowerLimit)
                    && this.validateInput(this.request.fat.upperLimit)
            },
            validateInput(input) {
                if (isFunction(input)) return true;
                if (input === undefined) return true;
                return !isNaN(input);
            },
            clear() {
                this.errors = [];
                this.$refs.form.reset();
                this.$refs.searchInput.clear();
            }
        }
    }

    function isFunction(functionToCheck) {
        return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
    }
</script>

<style scoped>
    .error-message{
        font-size: .8rem !important;
    }
</style>