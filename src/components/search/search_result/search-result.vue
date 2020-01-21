﻿<template>
    <v-container fluid row wrap justify-center >
        <v-data-iterator
                :items="items"
                :items-per-page.sync="itemsPerPage"
                :page="page"
                :search="search"
                :sort-by="sortBy.toLowerCase()"
                :sort-desc="sortDesc"
                hide-default-footer
        >
            <template v-slot:header>
                <v-toolbar
                        dark
                        color="teal darken-3"
                        class="mb-1 ml-12 mr-1 mt-1"
                >
                    <v-text-field
                            v-model="search"
                            clearable
                            flat
                            solo-inverted
                            hide-details
                            prepend-inner-icon=""
                            label="Szukaj"
                    ></v-text-field>
                    <template v-if="$vuetify.breakpoint.mdAndUp">
                        <v-spacer></v-spacer>
                        <v-select
                                v-model="sortBy"
                                flat
                                solo-inverted
                                hide-details
                                :items="keys"
                                prepend-inner-icon=""
                                label="Sort by"
                        ></v-select>
                        <v-spacer></v-spacer>
                        <v-btn-toggle
                                v-model="sortDesc"
                                mandatory
                        >
                            <v-btn
                                    large
                                    depressed
                                    color="teal"
                                    :value="false"
                            >
                                <v-icon>mdi-arrow-up</v-icon>
                            </v-btn>
                            <v-btn
                                    large
                                    depressed
                                    color="teal"
                                    :value="true"
                            >
                                <v-icon>mdi-arrow-down</v-icon>
                            </v-btn>
                        </v-btn-toggle>
                    </template>
                </v-toolbar>
            </template>

            <template v-slot:default="props">
                <v-row class=" mb-12 ml-2">
                    <v-col
                            v-for="item in props.items"
                            :key="item.name"
                            :cols="12"
                            class="ma-2"
                    >
                        <recipe-card :name="item.name" 
                                     :image="item.image"
                                     :calories="item.calories"
                                     :carbohydrates="item.carbohydrates"
                                     :fat="item.fat"
                                     :protein="item.protein"
                                     :allergens="item.allergens"
                                     class="mb-n10 col-md-12"
                        ></recipe-card>
                        
                    </v-col>
                </v-row>
            </template>

            <template v-slot:footer>
                <v-row class="mt-2 ml-12 mr-1" align="center" justify="center">
                    <span class="grey--text">Przepisów na stronę</span>
                    <v-menu offset-y>
                        <template v-slot:activator="{ on }">
                            <v-btn
                                    dark
                                    text
                                    color="teal"
                                    class="ml-2"
                                    v-on="on"
                            >
                                {{ itemsPerPage }}
                                <v-icon>mdi-chevron-down</v-icon>
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item
                                    v-for="(number, index) in itemsPerPageArray"
                                    :key="index"
                                    @click="updateItemsPerPage(number)"
                            >
                                <v-list-item-title>{{ number }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>

                    <v-spacer></v-spacer>

                    <span
                            class="mr-3
            grey--text"
                    >
            Strona {{ page }} z {{ numberOfPages }}
          </span>
                    <v-btn
                            fab
                            dark
                            color="teal darken-3"
                            class="mr-1"
                            @click="formerPage"
                    >
                        <v-icon>mdi-chevron-left</v-icon>
                    </v-btn>
                    <v-btn
                            fab
                            dark
                            color="teal darken-3"
                            class="ml-1"
                            @click="nextPage"
                    >
                        <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                </v-row>
            </template>
        </v-data-iterator>
    </v-container>
</template>

<script>
    import RecipeCard from "@/components/search/search_result/recipe-card";
    export default {
        components: {RecipeCard},
        data () {
            return {
                itemsPerPageArray: [3, 6, 9],
                search: '',
                filter: {},
                sortDesc: false,
                page: 1,
                itemsPerPage: 3,
                sortBy: 'calories',
                keys: [
                    'Name',
                    'Kalorie',
                    'Fat',
                    'Carbs',
                    'Protein',
                ],
                items: [
                    {
                        name: 'Frozen Yogurt',
                        description: "Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada",
                        image: "frozen-yogurt.jpg",
                        calories: 159,
                        fat: 6.0,
                        carbohydrates: 24,
                        protein: 4.0,
                        allergens:["Gluten", "Mleko", "Orzechy"]
                    },
                    {
                        name: 'Ice cream sandwich',
                        description: "Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada",
                        image: "ice-cream-sandwich.jpeg",
                        calories: 237,
                        fat: 9.0,
                        carbohydrates: 37,
                        protein: 4.3,
                        allergens:["Gluten", "Mleko", "Orzechy", "Jaja kurze",  "Ryby i skorupiaki", "Soja"]
                    },
                    {
                        name: 'Eclair',
                        description: "Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada",
                        image: "choc-eclairs.jpg",
                        calories: 262,
                        fat: 16.0,
                        carbohydrates: 23,
                        protein: 6.0,
                        allergens:["Gluten", "Mleko", "Orzechy"]
                    },
                    {
                        name: 'Cupcake',
                        description: "Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada",
                        image: 'nuggetsy-6.jpg',
                        calories: 305,
                        fat: 3.7,
                        carbohydrates: 67,
                        protein: 4.3,
                        allergens:["Gluten", "Mleko", "Orzechy"]
                    },
                    {
                        name: 'Gingerbread',
                        description: "Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada",
                        image: "nuggetsy-6.jpg",
                        calories: 356,
                        fat: 16.0,
                        carbohydrates: 49,
                        protein: 3.9,
                        allergens:["Gluten", "Mleko", "Orzechy"]
                    },
                    {
                        name: 'Jelly bean',
                        description: "Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada",
                        image: "nuggetsy-6.jpg",
                        calories: 375,
                        fat: 0.0,
                        carbohydrates: 94,
                        protein: 0.0,
                        allergens:["Gluten", "Mleko", "Orzechy"]
                    },
                    {
                        name: 'Lollipop',
                        description: "Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada",
                        image: "nuggetsy-6.jpg",
                        calories: 392,
                        fat: 0.2,
                        carbohydrates: 98,
                        protein: 0,
                        allergens:["Gluten", "Mleko", "Orzechy"]
                    },
                    {
                        name: 'Honeycomb',
                        description: "Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada",
                        image: "nuggetsy-6.jpg",
                        calories: 408,
                        fat: 3.2,
                        carbohydrates: 87,
                        protein: 6.5,
                        allergens:["Gluten", "Mleko", "Orzechy"]
                    },
                    {
                        name: 'Donut',
                        description: "Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada",
                        image: "nuggetsy-6.jpg",
                        calories: 452,
                        fat: 25.0,
                        carbohydrates: 51,
                        protein: 4.9,
                        allergens:["Gluten", "Mleko", "Orzechy"]
                    },
                    {
                        name: 'KitKat',
                        description: "Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada",
                        image: "nuggetsy-6.jpg",
                        calories: 518,
                        fat: 26.0,
                        carbohydrates: 65,
                        protein: 7,
                        allergens:["Gluten", "Mleko", "Orzechy"]
                    },
                ],
            }
        },
        computed: {
            numberOfPages () {
                return Math.ceil(this.items.length / this.itemsPerPage)
            },
            filteredKeys () {
                return this.keys.filter(key => key !== `Name`)
            },
        },
        methods: {
            nextPage () {
                if (this.page + 1 <= this.numberOfPages) this.page += 1
            },
            formerPage () {
                if (this.page - 1 >= 1) this.page -= 1
            },
            updateItemsPerPage (number) {
                this.itemsPerPage = number
            },
        },
    }
</script>