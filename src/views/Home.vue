<template>
    <section>
        <hero/>
        <info/>
        <v-container grid-list-xl>
            <v-layout row wrap justify-center class="my-12">
                <search-stepper class="full-width"/>
            </v-layout>
        </v-container>
        <section>
            <v-parallax src="../assets/home_bottom.jpg" height="460">
                <v-layout column align-center justify-center>
                    <div class="headline white--text mb-4 text-center">Diata jeszce nigdy nie była tak łatwa</div>
                    <em>Nie czekaj, znajdź coś dla siebie</em>
                    <v-btn
                            class="mt-12"
                            color="teal"
                            dark
                            large
                            href="/find"
                    >
                        Zaczynamy
                    </v-btn>
                </v-layout>
            </v-parallax>
        </section>
        <about/>
    </section>
</template>

<script>
    import hero from '../components/home/hero.vue';
    import info from "@/components/home/info";
    import About from "@/components/home/about";
    import Find from "@/views/Find";
    import SearchStepper from "@/components/search/search-stepper";

    export default {
        name: "Home",
        components: {
            SearchStepper,
            About,
            info,
            hero
        }
    }
</script>

<style>
    .v_parallax_image_bottom {
    @include object-fit: (cover, top) !important;
    }

    .transparent--icon {
        opacity: 0.5;
    }
    
    .full-width{
        width: 100%;
    }
</style>
