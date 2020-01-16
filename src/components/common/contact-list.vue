﻿<template>
    <v-flex xs12 sm6 offset-sm1>
    <v-card flat class="transparent">
        <v-card-title primary-title class="layout justify-center">
            <div class="headline">Znajdź nas</div>
        </v-card-title>
        <v-card-text>
            Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
        </v-card-text>
        <v-list class="transparent"> 
            <contact-list-item icon="mdi-phone" data="+48 781 361 182"/>
            <contact-list-item icon="mdi-map-marker" data="Rzeszów, Polska"/>
            <contact-list-item icon="mdi-email" data="pereiradawid@outlook.com"/>
        </v-list>
    </v-card>
    </v-flex>
</template>

<script>
    import ContactListItem from "./contact-list-item";
    export default {
        name: "contact-list",
        components: {ContactListItem},
    }
</script>

<style scoped>

</style>