<template>
    <div>
        <v-parallax src="../assets/home_bottom.jpg" height="240"></v-parallax>
        <v-container class="grey lighten-5">
            <v-row no-gutters >
                <v-col
                        cols="12"
                        sm="3"
                >
                    <search-panel></search-panel>
                </v-col>
                <v-col
                        cols="12"
                        sm="9"
                >
                    <recipe-card></recipe-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import SearchResult from "@/components/search/search_result/search-result";
    import SearchPanel from "@/components/search/search_panel/search-panel";
    import RecipeDetails from "@/components/recipe-details/recipe-details";
    import RecipeCard from "@/components/search/search_result/recipe-card";

    export default {
        name: "",
        components: {RecipeCard, RecipeDetails, SearchPanel, SearchResult}
    }
</script>

<style scoped>

</style>