<template>
            <li class="teal--text">
                <p class="grey--text text--darken-2 ingredient-list">{{name}}
                    <span> {{quantity}} g</span></p>
            </li>
</template>

<script>
    export default {
        name: "recipe-details-ingredient",
        props:{
            name: String,
            quantity: Number
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables.scss';
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap');

    .ingredient-list {
        font-size: .8rem !important;
    }
</style>