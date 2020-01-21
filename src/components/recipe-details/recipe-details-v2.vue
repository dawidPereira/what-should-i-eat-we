<template>
    <v-container class="grey lighten-5">
        <v-card class="pa-2 mt-n2" tile>
            <v-row no-gutters>
                <v-col :cols="4" class="mt-2">
                    <div>
                        <v-col class="ml-n3 mr-n3 mt-n1">
                            <h3 style="font-family: Montserrat, serif; font-weight: bold; font-size: 1.6rem; text-align: center"
                                class="teal--text ml-3 mt-n1">
                                Pierś z kurczaka z opiekanymi ziemniakami
                            </h3>
                        </v-col>
                        <v-col class="mt-n8 ml-n3 mr-n3">
                            <v-row class="macro ml-10">
                                <v-col>
                                    <p class="grey--text text--darken-2">
                                        <v-icon>mdi-timelapse</v-icon>
                                        <span class="time">30 m</span></p>
                                </v-col>
                                <v-col>
                                    <p class="grey--text text--darken-2">
                                        <v-icon>mdi-food-fork-drink</v-icon>
                                        <span class="time">5</span></p>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-divider class="mx-4 mt-n4 mb-n4"></v-divider>
                    </div>
                    <div class="macro ma-3 ml-4">
                        <v-row>
                            <v-col>
                                <h6>Kalorie</h6>
                                <p class="grey--text text--darken-2">550<span class="gram">kcal</span></p>
                            </v-col>
                            <v-col class="ml-n2">
                                <h6>B</h6>
                                <p class="grey--text text--darken-2">10<span class="gram">g</span></p>
                            </v-col>
                            <v-col class="ml-n5">
                                <h6>W</h6>
                                <p class="grey--text text--darken-2">22<span class="gram">g</span></p>
                            </v-col>
                            <v-col class="ml-n5">
                                <h6>T</h6>
                                <p class="grey--text text--darken-2">14<span class="gram">g</span></p>
                            </v-col>
                        </v-row>
                        <v-col class="ml-n2 mr-n3 mt-n2">
                            <v-row justify="space-around">
                                <div v-for="item in allergens" :key="item">
                                    <v-chip color="grey lighten-3" text-color="teal" x-small
                                            tyle="font-family: Montserrat, serif; font-size: .6rem; font-weight: 500">
                                        {{item}}
                                    </v-chip>
                                </div>
                            </v-row>
                        </v-col>
                    </div>
                </v-col>
                <v-col :cols="8">
                    <v-img
                            class="ma-4"
                            :src="image"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-divider class="mx-4 "></v-divider>
                </v-col>
            </v-row>
            <v-row >
                <v-col class="ml-n0 mt-n8">
                    <v-subheader style="font-family: Montserrat, serif; font-weight: bold; text-align: center"
                                 class="teal--text">
                        Lista składników:
                    </v-subheader>
                </v-col>
            </v-row>
            <v-row >
                <v-col class="ml-3 mt-n8 macro">
                    <v-list>
                        <v-list-item>
                            <p class="grey--text text--darken-2" style="font-size: .9rem">Filet z piersi z kurczaka<span class="gram ml-12" style="font-size: .9rem">150 g</span></p>
                        </v-list-item>
                        <v-list-item>
                            <p class="grey--text text--darken-2" style="font-size: .9rem">Filet z piersi z kurczaka<span class="gram ml-12" style="font-size: .9rem">150 g</span></p>
                        </v-list-item>
                        <v-list-item>
                            <p class="grey--text text--darken-2" style="font-size: .9rem">Filet z piersi z kurczaka<span class="gram ml-12" style="font-size: .9rem">150 g</span></p>
                        </v-list-item>
                    </v-list>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "recipe-details-v2",
        data: () => ({
            image: "http://codzisw.menu/wp-content/uploads/2016/06/nuggetsy-2-900x601.jpg",
            allergens: ["Gluten", "Mleko", "Orzechy", "Jaja kurze", "Ryby i skorupiaki", "Soja"]
        })
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/style';
    @import '../../styles/variables';
    @import url('https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css');
</style>