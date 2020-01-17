    <template>
        <v-stepper v-model="e1">
            <v-stepper-header>
                <v-stepper-step :complete="e1 > 1" step="1" editable color="teal">Podaj ilość kalori</v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step :complete="e1 > 2" step="2" editable color="teal">Ustal makroskładniki</v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step :complete="e1 > 3" step="3" editable color="teal">Wyklucz alergeny</v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step step="4" editable color="teal">Sprecyzuj wymagania</v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
                <v-stepper-content step="1">
                    <calories-card></calories-card>
                </v-stepper-content>

                <v-stepper-content step="2">
                    <macro-nutrient-card></macro-nutrient-card>
                </v-stepper-content>

                <v-stepper-content step="3">
                    <allergens-card></allergens-card>
                </v-stepper-content>

                <v-stepper-content step="4">
                    <requirement-card></requirement-card>
                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
    </template>

    <script>
        import CaloriesCard from "@/components/search/calories-card";
        import MacroNutrientCard from "@/components/search/macro-nutrient-card";
        import AllergensCard from "@/components/search/allergens-card";
        import RequirementCard from "@/components/search/requirement-card";
        export default {
            name: "search-stepper",
            components: {RequirementCard, AllergensCard, MacroNutrientCard, CaloriesCard},
            data: () => ({
                e1: 0,
            }),
        }
    </script>
