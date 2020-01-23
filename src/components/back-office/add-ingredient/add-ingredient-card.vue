<template>
    <v-card>
        <v-col class="ma-4">
            <v-card-title class="teal--text font-weight-bold ml-n4">{{name}}</v-card-title>
            <v-form>
                <teal-text-field label="Nazwa składnika" @valueChanged="nameChanged" class="mr-8"></teal-text-field>
                <v-subheader class="font-weight-bold header ml-n4">Makroskładniki:</v-subheader>
                <v-col>
                    <v-row>
                        <teal-text-field label="białko / 100g" class="mr-8"></teal-text-field>
                        <teal-text-field label="węglowodany / 100g" class="mr-8"></teal-text-field>
                        <teal-text-field label="tłuszcz / 100g" class="mr-8"></teal-text-field>
                    </v-row>
                </v-col>
                <v-row>
                    <v-col :cols="6">
                        <v-subheader class="font-weight-bold header ml-n4">Allergeny:</v-subheader>
                        <search-checkbox label="Mleko krowie" @valueChanged="milkValueChanged"></search-checkbox>
                        <search-checkbox label="Jaja kurze" @valueChanged="eggsValueChanged"></search-checkbox>
                        <search-checkbox label="Pszenica" @valueChanged="wheatValueChanged"></search-checkbox>
                        <search-checkbox label="Ryby i skorupiaki"
                                         @valueChanged="shellfishValueChanged"></search-checkbox>
                        <search-checkbox label="Soja" @valueChanged="soyValueChanged"></search-checkbox>
                        <search-checkbox label="Orzechy" @valueChanged="nutsValueChanged"></search-checkbox>
                    </v-col>
                    <v-col :cols="6" >
                        <v-row class="requirements">
                            <v-col>
                        <v-subheader class="font-weight-bold  ml-n4">Wymagania:</v-subheader>
                        <search-checkbox label="Z produktów wegetariańskich"
                                         @valueChanged="vegetarianValueChanged"></search-checkbox>
                        <search-checkbox label="Z produktów wegańskich"
                                         @valueChanged="veganValueChanged"></search-checkbox>
                        <search-checkbox label="Z produktów ekologicznych"
                                         @valueChanged="ecologicalValueChanged"></search-checkbox>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="button ml-n4">
                        <v-list-item >
                            <v-list-item-content>
                                <v-btn class="white--text mb-2" type="submit" color="teal">Dodaj</v-btn>
                                <v-btn class="white--text" @click="clear" color="teal">Wyczyść</v-btn>
                            </v-list-item-content>
                        </v-list-item>
                    </v-col>
                </v-row>
            </v-form>
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
            name: "Nowy składnik",
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
        }),
        methods: {
            nameChanged(value) {
                this.name = value;
            }
        }
    }
</script>

<style scoped>
    .requirements{
        min-height: 240px;
    }
.button{
    max-width: 360px;
}
</style>