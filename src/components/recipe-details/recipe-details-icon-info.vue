<template>
    <v-col class="macro">
        <h6>{{info}} </h6>
        <p>
            <v-icon class="grey--text text--darken-2">{{icon}}</v-icon>
            <span class="time">{{subInfo}}</span></p>
    </v-col>
</template>

<script>
    export default {
        name: "recipe-details-icon-info",
        props: {
            info: String,
            icon: String,
            subInfo: String
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables.scss';
    @import '../../styles/style.scss';
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap');
    @import url('https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css');

</style>