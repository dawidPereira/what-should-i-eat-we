﻿
<template>
    <v-container class="grey lighten-5">
        <v-card class="pa-2 mt-n2" hover>
            <v-row no-gutters>
                <v-col :cols="4" class="mt-2">
                    <div>
                        <v-col class="ml-n3 mr-n3 mt-n1">
                            <h3 style="font-family: Montserrat, serif; font-weight: bold; font-size: 1.6rem; text-align: center"
                                class="teal--text ml-3 mt-n1">
                                {{name}}
                            </h3>
                        </v-col>
                    </div>
                    <div class="ma-3 ml-6 mt-n4">
                        <v-divider></v-divider>
                    </div>

                    <div class="macro ma-3 ml-6 mt-n3">
                        <v-row>
                            <v-col>
                                <h6>Kalorie</h6>
                                <p class="grey--text text--darken-2">{{calories}}<span class="gram">kcal</span></p>
                            </v-col>
                            <v-col class="ml-n2">
                                <h6>B</h6>
                                <p class="grey--text text--darken-2">{{protein}}<span class="gram">g</span></p>
                            </v-col>
                            <v-col class="ml-n5">
                                <h6>W</h6>
                                <p class="grey--text text--darken-2">{{carbohydrates}}<span class="gram">g</span></p>
                            </v-col>
                            <v-col class="ml-n5">
                                <h6>T</h6>
                                <p class="grey--text text--darken-2">{{fat}}<span class="gram">g</span></p>
                            </v-col>
                        </v-row>
                        <div class="macro ml-5">
                            <v-row>
                                <recipe-details-icon-info
                                        info="Przygotowanie"
                                        icon="mdi-timelapse"
                                        sub-info="30 min"></recipe-details-icon-info>
                                <recipe-details-icon-info
                                        info="Ilość porcji"
                                        icon="mdi-food-fork-drink"
                                        sub-info="5"></recipe-details-icon-info>
                            </v-row>
                        </div>
                        <v-divider></v-divider>
                        <v-col class="ml-n2 mr-n3 mt-n2">
                            <v-row justify="space-around">
                                <div v-for="item in allergens" :key="item">
                                    <v-chip color="grey lighten-3" text-color="teal" x-small
                                            tyle="font-family: Montserrat, serif; font-size: .6rem; font-weight: 500">
                                        {{item}}
                                    </v-chip>
                                </div>
                            </v-row>
                        </v-col>
                    </div>
                </v-col>
                <v-col :cols="8">
                    <v-img class="ma-4 image" :src="require(`@/assets/${image}`)"></v-img>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>
    import RecipeDetailsIconInfo from "@/components/recipe-details/recipe-details-icon-info";
    import RecipeDetailsAllergens from "@/components/recipe-details/recipe-details-allergens";
    import RecipeDetailsMacro from "@/components/recipe-details/recipe-details-macro";

    export default {
        name: "recipe-card",
        components: {RecipeDetailsMacro, RecipeDetailsAllergens, RecipeDetailsIconInfo},
        props: {
            name: String,
            image: String,
            calories: Number,
            fat: Number,
            carbohydrates: Number,
            protein: Number,
            allergens: Array
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../../styles/style';
    @import '../../../styles/variables';
    @import url('https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css');
    
    .image{
        max-height: 360px;
        max-width: 720px;
    }
</style>