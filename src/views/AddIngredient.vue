<template>
    <app-bar>
        <add-ingredient-card></add-ingredient-card>
    </app-bar>
</template>

<script>

    import AddIngredientCard from "../components/back-office/add-ingredient/add-ingredient-card";
    import AppBar from "../components/back-office/app-bar/app-bar";
    export default {
        name: "",
        components: {AppBar, AddIngredientCard}
    }
</script>

<style scoped>

</style>