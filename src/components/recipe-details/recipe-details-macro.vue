<template>
    <v-row class="macro ml-n1">
        <v-col>
            <h6 class="">Kalorie</h6>
            <p class="grey--text text--darken-2 ">{{calories}}<span class="gram">kcal</span></p>
        </v-col>
        <v-col class="ml-12">
            <h6 class="ml-11">Białko</h6>
            <p class="grey--text text--darken-2 ml-11">{{protein}}<span class="gram">g</span></p>
        </v-col>
        <v-col class="ml-n5">
            <h6>Węglowodany</h6>
            <p class="grey--text text--darken-2">{{carbohydrates}}<span class="gram">g</span></p>
        </v-col>
        <v-col class="ml-n5">
            <h6>Tłuszcz</h6>
            <p class="grey--text text--darken-2">{{fat}}<span class="gram">g</span></p>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "recipe-details-macro",
        props: {
            calories: Number,
            protein: Number,
            carbohydrates: Number,
            fat: Number
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/style.scss';
    @import '../../styles/variables.scss';
    @import url('https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css');
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap');

</style>