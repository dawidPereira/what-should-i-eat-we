<template>
    <v-card
            :loading="loading"
            class="mx-auto my-12"
            max-width="374"
    >
        <v-img
                height="250"
                :src="image"
        ></v-img>
        <div>
            <v-card-title class="teal--text justify-center">{{name}}</v-card-title>
            <v-container class="mt-n8 ml-1">
                <v-row class="macro ml-4">
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
            </v-container>
            <v-divider class="mx-4 mt-n8 mb-n4"></v-divider>
        </div>
        <div class="macro ma-3 ml-4">
            <v-row>
                <v-col>
                    <h6>Kalorie</h6>
                    <p class="grey--text text--darken-2">{{calories}}<span class="gram">kcal</span></p>
                </v-col>
                <v-col class="ml-n2">
                    <h6>B</h6>
                    <p class="grey--text text--darken-2">{{protein}}<span class="gram">g</span></p>
                </v-col>
                <v-col class="ml-n5">
                    <h6>W</h6>
                    <p class="grey--text text--darken-2">{{carbs}}<span class="gram">g</span></p>
                </v-col>
                <v-col class="ml-n5">
                    <h6>T</h6>
                    <p class="grey--text text--darken-2">{{fat}}<span class="gram">g</span></p>
                </v-col>
            </v-row>
        </div>
        <v-divider class="mx-4 mt-n5 mb-n1"></v-divider>

        <v-row class="ma-1 ml-4">
            <v-chip-group v-for="item in allergens" :key="item" >
                <v-chip class="ma-1" text-color="teal" small>{{item}}</v-chip>
            </v-chip-group>
        </v-row>
    </v-card>
</template>

<script>
    export default {
        data: () => ({
            loading: false,
            selection: 1,
        }),
        props: {
            name: String,
            description: String,
            image: URL,
            calories: Number,
            fat: Number,
            carbs: Number,
            protein: Number,
            allergens: Array
        },
        methods: {
            reserve() {
                this.loading = true
                setTimeout(() => (this.loading = false), 2000)
            },
        },
    }
</script>
<style lang="scss">
    @import '../../assets/css/style';
    @import 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css';
</style>
