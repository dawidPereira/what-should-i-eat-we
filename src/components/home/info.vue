<template>
    <v-layout
            column
            wrap
            class="my-12"
            align-center
    >
        <v-flex xs12 sm4 class="my-4">
            <div class="text-center">
                <h2 class="headline">Znajdź to czego potrzebujesz</h2>
                <span class="subheading">
              </span>
            </div>
        </v-flex>
        <v-flex xs12>
            <v-container grid-list-xl>
                <v-layout row wrap align-center>
                    <column-info icon="mdi-counter" header="Ustal kalorie">
                        <v-card-text>Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                            Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                        </v-card-text>
                    </column-info>
                    <column-info icon="mdi-ab-testing" header="Wybierz makroskładniki">
                        <v-card-text>Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                            Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                        </v-card-text>
                    </column-info>
                    <column-info icon="mdi-cart-off" header="Odrzuć alergeny">
                        <v-card-text>Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                            Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                        </v-card-text>
                    </column-info>
                </v-layout>
            </v-container>
        </v-flex>
    </v-layout>
</template>

<script>
    import ColumnInfo from "@/components/common/column-info";
    export default {
        name: "Info",
        components: {ColumnInfo},
    }
</script>

<style scoped>

</style>