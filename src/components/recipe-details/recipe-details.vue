<template>
    <v-container class="grey lighten-5">
        <v-card class="pa-2 mt-n2" tile>
            <recipe-details-title :title="name" class="mb-n3"></recipe-details-title>
            <v-row no-gutters>
                <recipe-details-ingredient-list :ingredients="ingredients"></recipe-details-ingredient-list>
                <v-col :cols="8">
                    <v-img class="ma-4" src="../../assets/nuggetsy-6.jpg"></v-img>
                </v-col>
            </v-row>
            <recipe-details-macro
                    :calories="macro.calories"
                    :protein="macro.protein"
                    :carbohydrates="macro.carbohydrates"
                    :fat="macro.fat"
                    class="ml-3 mt-n4">>
            </recipe-details-macro>
            <v-row>
                <v-card-text style="font-family: Montserrat, serif; font-size: .9rem;" class="ma-4 mt-n4">
                    {{description}}
                </v-card-text>
            </v-row>
            <div class="macro ml-5 mt-n4">
                <v-row>
                    <recipe-details-icon-info
                        info="Czas przygotowania"
                        icon="mdi-timelapse"
                        sub-info="30 min"></recipe-details-icon-info>
                    <recipe-details-icon-info
                            info="Ilość porcji"
                            icon="mdi-food-fork-drink"
                            sub-info="5"></recipe-details-icon-info>
                </v-row>
            </div>
            <recipe-details-allergens :allergens="allergens"></recipe-details-allergens>

        </v-card>
    </v-container>
</template>

<script>
    import RecipeDetailsMacro from "@/components/recipe-details/recipe-details-macro";
    import RecipeDetailsIngredient from "@/components/recipe-details/recipe-details-ingredient";
    import RecipeDetailsTitle from "@/components/recipe-details/recipe-details-title";
    import RecipeDetailsIngredientList from "@/components/recipe-details/recipe-detail-ingredient-list";
    import RecipeDetailsAllergens from "@/components/recipe-details/recipe-details-allergens";
    import RecipeDetailsIconInfo from "@/components/recipe-details/recipe-details-icon-info";

    export default {
        name: "recipe-details",
        components: {
            RecipeDetailsIconInfo,
            RecipeDetailsAllergens,
            RecipeDetailsIngredientList, RecipeDetailsTitle, RecipeDetailsIngredient, RecipeDetailsMacro
        },
        data: () => ({
            macro: {
                calories: 560,
                carbohydrates: 60,
                protein: 30,
                fat: 24
            },
            name: "Filet z kurczaka z opiekanymi ziemniakami",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n" +
                "                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type\n" +
                "                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the\n" +
                "                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s\n" +
                "                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop\n" +
                "                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            ingredients: [
                {
                    name: "Filet z piersi kurczaka",
                    quantity: 150
                },
                {
                    name: "Ziemniaki",
                    quantity: 150
                },
                {
                    name: "Oliwa z oliwek",
                    quantity: 20
                },
                {
                    name: "Jajo kurze",
                    quantity: 140
                },
                {
                    name: "Bułka tarta",
                    quantity: 100
                },
                {
                    name: "Cytryna",
                    quantity: 50
                },
                {
                    name: "Marchewka",
                    quantity: 200
                },
                {
                    name: "Śmietana",
                    quantity: 50
                },
                {
                    name: "Smalec",
                    quantity: 100
                },
            ],
            allergens: ["Gluten", "Mleko", "Orzechy", "Jaja kurze", "Ryby i skorupiaki", "Soja"]
        })
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/style.scss';
    @import '../../styles/variables.scss';
    @import url('https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css');
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap');


    .macro-size {
        font-size: 2rem !important;
    }
</style>