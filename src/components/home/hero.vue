<template>
    <v-parallax src="../../assets/home.jpg" height="800" class="v_parallax_image_bottom">
        <v-layout
                column
                align-center
                justify-top
                class="white--text ma-10"
        >
            <div class="transparent--icon display-1 text-center">
                <v-icon size="240" color="white">mdi-noodles</v-icon>
                <h1 class="white--text mb-2">Na co dzisiaj masz ochotę</h1>
            </div>
            <v-btn
                    class="mt-12"
                    color="teal"
                    dark
                    large
                    href="/find"
            >
                Znajdź coś dla siebie
            </v-btn>
        </v-layout>
    </v-parallax>
</template>

<script>
    export default {
        name : "Hero"
    }
</script>

<style scoped>
    .v_parallax_image_bottom{
    @include object-fit: (cover, top) !important;
    }
    .transparent--icon{
        opacity: 0.5;
    }
</style>