<template>
    <app-bar>
        <add-recipe-card></add-recipe-card>
    </app-bar>
</template>

<script>

    import AddRecipeCard from "../components/back-office/add-recipe/add-recipe-card";
    import AppBar from "../components/back-office/app-bar/app-bar";
    export default {
        name: "",
        components: {AppBar, AddRecipeCard}
    }
</script>

<style scoped>

</style>