<template>
    <v-card
            height="100%"
            width="256"
            class="mx-auto"
    >
        <v-navigation-drawer permanent>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="title teal--text">
                        Wyszukaj
                    </v-list-item-title>
                    <v-list-item-subtitle>
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list>
                <v-list-item>
                    <v-list-item-content>
                        <teal-text-field label="Minimalna ilość kalorii" :data="lowerLimit"
                                         :rules="caloriesRules"></teal-text-field>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item>
                    <v-list-item-content>
                        <teal-text-field label="Maksymalna ilość kalori" :data="upperLimit"
                                         :rules="caloriesRules"></teal-text-field>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item>
                    <v-list-item-content>
                        <teal-text-field label="Minimalna ilość białka" :data="proteinslowerLimit"
                                         :rules="macroNutrientRule"></teal-text-field>
                    </v-list-item-content>
                </v-list-item>
                
                <v-list-item>
                    <v-list-item-content>
                        <teal-text-field label="Maksymalna ilość białka" :data="proteinsupperLimit"
                                         :rules="macroNutrientRule"></teal-text-field>
                    </v-list-item-content>
                </v-list-item>
                
                <v-list-item>
                    <v-list-item-content>
                        <teal-text-field label="Minimalna ilość węglowodanów" :data="carbohydrateslowerLimit"
                                         :rules="macroNutrientRule"></teal-text-field>
                    </v-list-item-content>
                </v-list-item>
                
                <v-list-item>
                    <v-list-item-content>
                        <teal-text-field label="Maksymalna ilość węglowodanów" :data="carbohydratesupperLimit"
                                         :rules="macroNutrientRule"></teal-text-field>
                    </v-list-item-content>
                </v-list-item>
                
                <v-list-item>
                    <v-list-item-content>
                        <teal-text-field label="Minimalna ilość tłuszczy" :data="fatslowerLimit"
                                         :rules="macroNutrientRule"></teal-text-field>
                    </v-list-item-content>
                </v-list-item>
                
                <v-list-item>
                    <v-list-item-content>
                        <teal-text-field label="Maksymalna ilość tłuszczy" :data="fatsupperLimit"
                                         :rules="macroNutrientRule"></teal-text-field>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item>
                    <v-list-item-content>
                            <v-checkbox v-model="milk" :label="`Mleko`" color="teal" class="ma-2"></v-checkbox>
                            <v-checkbox v-model="gluten" :label="`Gluten`" color="teal" class="ma-2"></v-checkbox>
                            <v-checkbox v-model="nuts" :label="`Orzechy`" color="teal" class="ma-2"></v-checkbox>
                            <v-checkbox v-model="requirementsforVegan" :label="`Dla vegan`" color="teal" class="ma-2"></v-checkbox>
                            <v-checkbox v-model="requirementsforVegetarian" :label="`Dla vegetarian`" color="teal" class="ma-2"></v-checkbox>
                            <v-checkbox v-model="requirementsecological" :label="`Z produktów ekologicznych`" color="teal" class="ma-2"></v-checkbox>
                            <v-checkbox v-model="mealTypesbreakfast" :label="`Śniadanie`" color="teal" class="ma-2"></v-checkbox>
                            <v-checkbox v-model="mealTypesdinner" :label="`Obiad`" color="teal" class="ma-2"></v-checkbox>
                            <v-checkbox v-model="mealTypessupper" :label="`Kolacja`" color="teal" class="ma-2"></v-checkbox>
                            <v-checkbox v-model="mealTypessnack" :label="`Przekąska`" color="teal" class="ma-2"></v-checkbox>
                            <v-checkbox v-model="mealTypessweets" :label="`Słodycze`" color="teal" class="ma-2"></v-checkbox>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item>
                    <v-list-item-content>
                        <v-btn class="mr-4 white--text" @click="submit" color="teal">Szukaj</v-btn>
                        <v-btn class="white--text" @click="clear" color="teal">Wyczyść</v-btn>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-card>
</template>

<script>
    import TealTextField from "@/components/search/teal-text-field";

    export default {
        name: "search-panel",
        components: {TealTextField},
        data: () => ({
            items: [
                {title: 'Dashboard', icon: 'mdi-view-dashboard'},
                {title: 'Photos', icon: 'mdi-image'},
                {title: 'About', icon: 'mdi-help-box'},
            ],
            right: null,
        })
    }
</script>

<style scoped>

</style>