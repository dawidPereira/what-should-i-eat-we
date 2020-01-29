<template>
    <v-card>
        <v-col>
            <v-card-title class="teal--text font-weight-bold title-font ml-3">{{ingredientName}}</v-card-title>
            <v-card-text>
                <v-form @submit="submit" ref="form" v-model="request" :lazy-validation="lazy">
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
                                              type="number" v-model="macroNutrients.protein"
                                              :rules="rules.numberInputRules"/>
                            </v-col>
                            <v-col :cols="4">
                                <v-text-field color="teal" label="węglowodany / 100g" class="v-label v-input "
                                              type="number" v-model="macroNutrients.carbohydrates"
                                              :rules="rules.numberInputRules"/>
                            </v-col>
                            <v-col :cols="4">
                                <v-text-field color="teal" label="tłuszcz / 100g" class="v-label v-input "
                                              type="number" v-model="macroNutrients.fat"
                                              :rules="rules.numberInputRules"/>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col :cols="6">
                                <v-subheader class="font-weight-bold header ml-n4">Allergeny:</v-subheader>
                                <v-checkbox label="Mleko krowie" class="mb-n8 v-label v-input" color="teal"
                                            v-model="value"/>
                                <v-checkbox label="Jaja kurze" class="mb-n8 v-label v-input" color="teal"
                                            v-model="value"/>
                                <v-checkbox label="Pszenica" class="mb-n8 v-label v-input" color="teal"
                                            v-model="value"/>
                                <v-checkbox label="Ryby i skorupiaki" class="mb-n8 v-label v-input" color="teal"
                                            v-model="value"/>
                                <v-checkbox label="Soja" class="mb-n8 v-label v-input" color="teal"
                                            v-model="value"/>
                                <v-checkbox label="Orzechy" class="mb-n8 v-label v-input" color="teal"
                                            v-model="value"/>
                            </v-col>
                            <v-col :cols="6">
                                <v-row class="requirements">
                                    <v-col>
                                        <v-subheader class="font-weight-bold  ml-n4">Wymagania:</v-subheader>
                                        <v-checkbox v-model="value" label="Z produktów wegetariańskich"
                                                    class="mb-n8 v-label v-input" color="teal"/>
                                        <v-checkbox v-model="value" label="Z produktów wegańskich"
                                                    class="mb-n8 v-label v-input" color="teal"/>
                                        <v-checkbox v-model="value" label="Z produktów ekologicznych"
                                                    class="mb-n8 v-label v-input" color="teal"/>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col class="button ml-n4">
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-btn class="white--text mb-2" type="submit" color="teal">Dodaj</v-btn>
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
    import TealTextField from "../../search/teal-text-field";
    import SearchCheckbox from "@/components/search/search_panel/search-checkbox";

    export default {
        name: "add-ingredient-card",
        components: {SearchCheckbox, TealTextField},
        data: () => ({
            valid: true,
            lazy: true,
            nameCounter: 100,
            ingredientName: null,

            macroNutrients: {
                protein: Number,
                carbohydrates: Number,
                fat: Number
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
                ecological: Boolean,
            },
            rules: {
                nameRules: [v => !!v || 'Podaj nazwę przepisu'],
                numberInputRules: [v => isValidNumber(v) || 'Wartość musi być liczbą.', v => !!v || 'Pole wymagane '],
            },
            request: {},
        }),
        methods: {
            submit() {
                if (this.validate())
                    return;
                this.request = new Object({
                    recipeIngredients: this.gerRecipeIngredients(this.selectedIngredients),
                    description: this.recipeDescription,
                    name: this.recipeName,
                    details: this.details,
                    image: this.image
                });
            },
            validate() {
                if (!this.$refs.form.validate()) {
                    event.preventDefault();
                    return false;
                }
                return true;
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