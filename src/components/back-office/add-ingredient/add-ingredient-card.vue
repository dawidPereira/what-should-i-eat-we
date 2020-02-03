<template>
    <v-card>
        <v-col>
            <v-card-title class="teal--text font-weight-bold title-font ml-3">{{ingredientName}}</v-card-title>
            <v-card-text>
                <v-form ref="form" :lazy-validation="lazy">
                    <v-col>
                        <v-col>
                            <v-row>
                                <v-text-field color="teal" label="Nazwa składnika" class="v-label v-input mb-6"
                                              :counter="nameCounter" type="string" v-model="ingredientName"
                                              :rules="rules.nameRules"/>
                            </v-row>
                        </v-col>
                        <v-subheader class="font-weight-bold header ml-n4">Makroskładniki:</v-subheader>
                        <v-row>
                            <v-col :cols="4">
                                <v-text-field color="teal" label="białko / 100g" class="v-label v-input "
                                              type="number" v-model="macroNutrients.protein.value"
                                              :rules="rules.numberInputRules"/>
                            </v-col>
                            <v-col :cols="4">
                                <v-text-field color="teal" label="węglowodany / 100g" class="v-label v-input "
                                              type="number" v-model="macroNutrients.carbohydrates.value"
                                              :rules="rules.numberInputRules"/>
                            </v-col>
                            <v-col :cols="4">
                                <v-text-field color="teal" label="tłuszcz / 100g" class="v-label v-input "
                                              type="number" v-model="macroNutrients.fat.value"
                                              :rules="rules.numberInputRules"/>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col :cols="6">
                                <v-subheader class="font-weight-bold header ml-n4">Allergeny:</v-subheader>
                                <v-checkbox label="Mleko krowie" class="mb-n8 v-label v-input" color="teal"
                                            v-model="allergens.milk.value"/>
                                <v-checkbox label="Jaja kurze" class="mb-n8 v-label v-input" color="teal"
                                            v-model="allergens.eggs.value"/>
                                <v-checkbox label="Pszenica" class="mb-n8 v-label v-input" color="teal"
                                            v-model="allergens.wheat.value"/>
                                <v-checkbox label="Ryby i skorupiaki" class="mb-n8 v-label v-input" color="teal"
                                            v-model="allergens.shellfish.value"/>
                                <v-checkbox label="Soja" class="mb-n8 v-label v-input" color="teal"
                                            v-model="allergens.soy.value"/>
                                <v-checkbox label="Orzechy" class="mb-n8 v-label v-input" color="teal"
                                            v-model="allergens.nuts.value"/>
                            </v-col>
                            <v-col :cols="6">
                                <v-row class="requirements">
                                    <v-col>
                                        <v-subheader class="font-weight-bold  ml-n4">Wymagania:</v-subheader>
                                        <v-checkbox v-model="requirements.forVegetarian.value"
                                                    label="Z produktów wegetariańskich"
                                                    class="mb-n8 v-label v-input" color="teal"/>
                                        <v-checkbox v-model="requirements.forVegan.value" label="Z produktów wegańskich"
                                                    class="mb-n8 v-label v-input" color="teal"/>
                                        <v-checkbox v-model="requirements.ecological.value"
                                                    label="Z produktów ekologicznych"
                                                    class="mb-n8 v-label v-input" color="teal"/>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col class="button ml-n4">
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-btn class="white--text mb-2" @click="submit" color="teal">Dodaj</v-btn>
                                        <v-btn class="white--text" @click="clear" color="teal">Wyczyść</v-btn>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-form>
            </v-card-text>
        </v-col>
    </v-card>
</template>

<script>
    import axios from 'axios';
    import TealTextField from "../../search/teal-text-field";
    import SearchCheckbox from "@/components/search/search_panel/search-checkbox";
    import * as requirementsService from '../../../app/services/requirementService'
    import * as enums from '../../../app/enums/enums.js'
    import * as allergenService from '../../../app/services/allergenService.js'


    export default {
        name: "add-ingredient-card",
        components: {SearchCheckbox, TealTextField},
        data: () => ({
            valid: true,
            lazy: true,
            nameCounter: 100,
            ingredientName: null,

            macroNutrients: {
                carbohydrates: {
                    macroNutrient: enums.macroNutrients.CARBOHYDRATE,
                    value: null,
                },
                fat: {
                    macroNutrient: enums.macroNutrients.PROTEIN,
                    value: null,
                },
                protein: {
                    macroNutrient: enums.macroNutrients.FAT,
                    value: null,
                },
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
            rules: {
                nameRules: [v => !!v || 'Podaj nazwę przepisu'],
                numberInputRules: [v => isValidNumber(v) || 'Wartość musi być liczbą.', v => !!v || 'Pole wymagane '],
            },
            request: {},
        }),
        computed: {
            allergensAsEnum: function () {
                return allergenService.asEnum(this.allergens)
            },
            allergensValue: function () {
                return allergenService.getValue(this.allergensAsEnum)
            },
            requirementsAsEnum: function () {
                return requirementsService.asEnum(this.requirements)
            },
            requirementsValue: function () {
                return requirementsService.getValue(this.requirementsAsEnum)
            },
            shares: function () {
                return [
                    {
                        macroNutrient: this.macroNutrients.protein.macroNutrient,
                        share: this.macroNutrients.protein.value / 100
                    },
                    {
                        macroNutrient: this.macroNutrients.carbohydrates.macroNutrient,
                        share: this.macroNutrients.carbohydrates.value / 100
                    },
                    {
                        macroNutrient: this.macroNutrients.fat.macroNutrient,
                        share: this.macroNutrients.fat.value / 100
                    }];
            }
        },
        methods: {
            async submit() {
                if (!this.validate()) {
                    event.preventDefault();
                    return;
                }
                this.request = this.buildRequest();
                let response = null;
                    await axios({
                    url: 'https://localhost:5001/api/ingredient/createIngredient',
                    method: 'post',
                    data: JSON.stringify(this.request),
                    headers: {'Content-Type': 'application/json'}})
                    .then(r => response = r)
                    .catch(error => response = error.response);
            },
            buildRequest() {
                return {
                    id: guid(),
                    name: this.ingredientName,
                    allergens: this.allergensValue,
                    requirements: this.requirementsValue,
                    shares: this.shares,
                };
            },
            validate() {
                return this.$refs.form.validate();
            },
            clear() {
                this.$refs.form.reset();
            }
        }
    }

    function isValidNumber(v) {
        if (v != null) {
            return !isNaN(v) && v >= 0;
        }
        return true;
    }

    const guid = require('uuid/v4');
</script>

<style scoped>
    .requirements {
        min-height: 240px;
    }

    .button {
        max-width: 360px;
    }

    .title-font {
        font-size: 2rem;
    }

    .v-input {
        font-size: .9rem !important;
    }

    .v-label >>> label {
        font-size: .8rem;
    }
</style>