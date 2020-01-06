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
                    <ColumnInfo :icon="firstInfo.icon" :header="firstInfo.header" :message="firstInfo.message"/>
                    <ColumnInfo :icon="secondInfo.icon" :header="secondInfo.header" :message="secondInfo.message"/>
                    <ColumnInfo :icon="thirdInfo.icon" :header="thirdInfo.header" :message="thirdInfo.message"/>
                </v-layout>
            </v-container>
        </v-flex>
    </v-layout>
</template>

<script>
    import ColumnInfo from "../common/ColumnInfo";
    export default {
        name: "Info",
        components: {ColumnInfo},
        data() {
            return{
                firstInfo : {
                    icon: "mdi-counter",
                    header: "Ustal kalorie",
                    message: "Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.\n" +
                        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n" +
                        "Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti."
                },
                secondInfo : {
                    icon: "mdi-ab-testing",
                    header: "Wybierz makroskładniki",
                    message: "Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.\n" +
                        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n" +
                        "Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti."
                },
                thirdInfo : {
                    icon: "mdi-cart-off",
                    header: "Odrzuć alergeny",
                    message: "Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.\n" +
                        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n" +
                        "Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti."
                }
            }
        }
    }
</script>

<style scoped>

</style>