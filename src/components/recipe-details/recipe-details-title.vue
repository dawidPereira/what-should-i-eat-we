<template>
    <v-row no-gutters justify="space-around">
        <v-col class="mt-2">
            <div>
                <v-col class="ml-n3 mr-n3 mt-n1">
                    <h1 class="teal--text ml-3 mt-n1 header">
                        {{title}}
                    </h1>
                </v-col>

            </div>

        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "recipe-details-title",
        props:{
            title: String
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables.scss';
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap');
    .header {
        font-weight: bold !important;
        text-align: center
    }

</style>