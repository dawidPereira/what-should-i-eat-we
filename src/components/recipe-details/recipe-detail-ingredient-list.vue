<template>
    <v-col :cols="4" class="mt-5">
        <v-row>
            <v-col class="ml-n0 mt-n8 mb-4">
                <v-subheader
                        style="font-family: Montserrat, serif; font-weight: bold; text-align: center; font-size: 1.1rem"
                        class="teal--text">
                    Lista składników:
                </v-subheader>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="ml-3 mt-n8">
                <ul v-for="item in ingredients"
                    :key="item.name">
                    <recipe-details-ingredient :name="item.name" :quantity="item.quantity"></recipe-details-ingredient>
                </ul>
            </v-col>
        </v-row>
    </v-col>
</template>

<script>
    import RecipeDetailsIngredient from "@/components/recipe-details/recipe-details-ingredient";
    export default {
        name: "recipe-details-ingredient-list",
        components: {RecipeDetailsIngredient},
        props:{
            ingredients:{
                type: Array,
                default: {
                    name: String,
                    quantity: Number
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables.scss';
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap');

</style>