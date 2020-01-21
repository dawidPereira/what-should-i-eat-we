<template>
    <v-row no-gutters>
        <v-col class="mt-2 mb-3">
            <v-row justify="space-around">
                <div v-for="item in allergens" :key="item">
                    <v-chip color="grey lighten-3" text-color="teal" small>
                        {{item}}
                    </v-chip>
                </div>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "recipe-details-allergens",
        props: {
            allergens : {
                type: Array,
                default: []
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables.scss';
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap');
    

</style>