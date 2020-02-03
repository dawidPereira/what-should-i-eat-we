<template>
    <v-card>
        <v-col>
            <v-card-title class="teal--text font-weight-bold title-font ml-3">{{recipeName}}</v-card-title>
            <v-card-text>
                <v-form ref="form" :lazy-validation="lazy">
                    <v-col>
                        <v-row>
                            <v-col :cols="6">
                                <v-text-field color="teal" label="Nazwa przepisu" class="v-label v-input mb-6"
                                              :counter="nameCounter" type="string"
                                              v-model="recipeName" :rules="rules.nameRules"/>
                                <v-row v-for="(selectedIngredient, index) of selectedIngredients"
                                       :key='`ingredient_${index}`' class="mt-n6">
                                    <v-col :cols="8">
                                        <v-text-field color="teal" label="Nazwa składnika" class="v-label v-input "
                                                      disabled v-model="selectedIngredient.ingredient.text"/>
                                    </v-col>
                                    <v-col :cols="3">
                                        <v-text-field color="teal" label="ilość / gram" class="v-label v-input "
                                                      disabled v-model="selectedIngredient.grams"/>
                                    </v-col>
                                    <v-col :cols="1" class="mt-7">
                                        <v-icon v-model="selectedIngredient.ingredient.value" color="teal white--text"
                                                @click="selectedIngredients = selectedIngredients
                                        .filter(x => x.ingredient.value !== selectedIngredient.ingredient.value)">
                                            mdi-delete-forever
                                        </v-icon>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col :cols="6">
                                        <v-autocomplete
                                                v-model="ingredient"
                                                :items="availableIngredients"
                                                label="Składnik"
                                                item-color="teal"
                                                color="teal"
                                                return-object
                                                :rules="rules.ingredientRules"
                                                class="v-input v-label"
                                                clearable
                                        ></v-autocomplete>
                                    </v-col>
                                    <v-col :cols="3">
                                        <v-text-field color="teal" label="ilość / gram" class="v-label v-input"
                                                      type="number"
                                                      v-model="grams" :rules="rules.gramsRules" clearable/>

                                    </v-col>
                                    <v-col :cols="3">
                                        <v-btn color="teal white--text mt-6" width="100%" small @click="addIngredient">
                                            Dodaj
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col :cols="6">
                                <v-file-input
                                        :rules="rules.imageRules"
                                        accept="image/png, image/jpeg, image/bmp"
                                        append-icon="mdi-camera"
                                        prepend-icon=""
                                        label="Zdjęcie"
                                        color="teal"
                                        class="v-label input"
                                        v-model="image"
                                        @change="onFileChange"
                                ></v-file-input>
                                <v-img :src="imagePath" class="mt-4"></v-img>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col>
                        <v-subheader class="font-weight-bold header ml-n3 mt-n6">Opis:</v-subheader>
                        <tiptap-vuetify class="teal teal--text v-header" v-model="recipeDescription"
                                        :extensions="extensions"/>
                    </v-col>
                    <v-row class="ma-0 mt-4">
                        <v-col :cols="3">
                            <v-text-field color="teal" label="czas przygotowania / min" class="v-label v-input "
                                          type="number"
                                          v-model="details.preparationTime" :rules="rules.numberInputRules"/>
                        </v-col>
                        <v-col :cols="3">
                            <v-text-field color="teal" label="koszt / pln" class="v-label v-input " type="number"
                                          v-model="details.approximateCost" :rules="rules.numberInputRules"/>
                        </v-col>
                        <v-col :cols="3">
                            <v-text-field color="teal" label="ilość porcji" class="v-label v-input " type="number"
                                          v-model="details.servings" :rules="rules.numberInputRules"/>
                        </v-col>
                        <v-col :cols="3">
                            <v-select :items="difficultyLevels" label="poziom trudności" color="teal"
                                      item-color="teal" v-model="details.difficultyLevel"
                                      class="teal--text input v-label " :rules="rules.numberInputRules"/>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="ma-3">
                            <v-btn width="100%" class="teal white--text" @click="submit">Zapisz przepis</v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
        </v-col>
    </v-card>
</template>

<script>
    import TealTextField from "@/components/search/teal-text-field";
    import axios from 'axios';
    import {
        TiptapVuetify,
        Heading,
        Bold,
        Italic,
        Strike,
        Underline,
        Code,
        Paragraph,
        BulletList,
        OrderedList,
        ListItem,
        Link,
        Blockquote,
        HardBreak,
        HorizontalRule,
        History
    } from 'tiptap-vuetify'
    import 'tiptap-vuetify/dist/main.css'

    export default {
        name: "add-recipe-card",
        components: {TealTextField, TiptapVuetify},
        data: () => ({
            valid: true,
            lazy: true,
            nameCounter: 100,
            recipeName: null,
            details: {
                difficultyLevel: null,
                preparationTime: null,
                approximateCost: null,
                servings: null,
                mealTypes: "none"
            },
            selectedIngredients: [],
            recipeDescription: null,
            ingredient: null,
            grams: null,
            image: null,
            imagePath: '',
            extensions: [History, Blockquote, Link, Underline, Strike, Italic, ListItem, BulletList, OrderedList, [Heading, {options: {levels: [1, 2, 3]}}],
                Bold, Code, HorizontalRule, Paragraph, HardBreak
            ],
            editor: null,
            difficultyLevels: [1, 2, 3, 4, 5],
            rules: {
                nameRules: [v => !!v || 'Podaj nazwę przepisu'],
                imageRules: [value => !value || value.size < 2000000 || 'Zdjęcie powinno być mniejsze niż 2 MB!',
                    v => !!v || 'Zdjęcie jest wymagane'],
                gramsRules: [v => isValidNumber(v) || 'Wartość musi być liczbą większą od zera.'],
                numberInputRules: [v => isValidNumber(v) || 'Wartość musi być liczbą większą od zera.', v => !!v || 'Pole wymagane '],
                ingredientRules: [v => isValidIngredient(v) || 'Wybierz składnik.']
            },
            request: {}
        }),
        props: {
            availableIngredients: {
                type: Array,
                default: () => [
                    {text: "Filet z kurczaka", value: '66F46FBB-2270-4948-9468-E0D0B3C698CF'},
                    {text: "Ryż", value: guid()},
                    {text: "Oliwa z oliwek", value: guid()}
                ],
            }
        },
        methods: {
            onFileChange() {
                if (!this.image) {
                    this.imagePath = '';
                    return;
                }
                this.imagePath = URL.createObjectURL(this.image);
            },
            addIngredient() {
                if (!this.ingredient || this.ingredient.value === '') {
                    this.ingredient = {
                        text: '',
                        value: ''
                    };
                    return;
                }
                if (!this.grams) {
                    this.grams = '';
                    return;
                }
                let selectedIngredient = {
                    ingredient: this.ingredient,
                    grams: this.grams
                };
                console.log(selectedIngredient);
                this.selectedIngredients.push(selectedIngredient);
                this.ingredient = null;
                this.grams = null;
            },
            async submit() {
                if (!this.validate())
                    return;
                this.request = this.buildRequest();
                console.log(this.request);
                let url = 'https://localhost:5001/api/recipe/createRecipe';
                let response = null;
                await axios({
                    url: url,
                    method: 'post',
                    data: this.request
                })
                    .then(r => response = r)
                    .catch(error => response = error.response);
                console.log(response);
            },
            buildRequest() {
                let formData = new FormData();
                formData.append('File', this.image);
                let body = {
                    id: guid(),
                    name: this.recipeName,
                    description: this.recipeDescription,
                    recipeInfo: this.details,
                    recipeIngredients: this.gerRecipeIngredients(this.selectedIngredients)
                };
                console.log(body);
                formData.append('jsonString', JSON.stringify(body));
                return formData;
            },
            gerRecipeIngredients(selectedIngredients) {
                return selectedIngredients.map(this.getRecipeIngredientFromSelectedIngredient)
            },
            getRecipeIngredientFromSelectedIngredient(selectedIngredient) {
                return {
                    ingredientId: selectedIngredient.ingredient.value,
                    grams: selectedIngredient.grams
                }
            },
            validate() {
                if (!this.$refs.form.validate()) {
                    event.preventDefault();
                    return false;
                }
                return true;
            },
        },
    }

    function isValidNumber(v) {
        if (v != null) {
            return !isNaN(v) && v > 0;
        }
        return true;
    }

    function isValidIngredient(v) {
        return !(v && v.value === '');
    }

    const guid = require('uuid/v4');
</script>

<style scoped>
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