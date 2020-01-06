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
            <ContactPosition :icon="phone.icon" :data="phone.data"/>
            <ContactPosition :icon="address.icon" :data="address.data"/>
            <ContactPosition :icon="email.icon" :data="email.data"/>
        </v-list>
    </v-card>
    </v-flex>
</template>

<script>
    import ContactPosition from "./ContactPosition";
    export default {
        name: "Contact",
        components: {ContactPosition},
        data() {
            return {
                phone: {
                    icon: "mdi-phone",
                    data: "+48 781 361 182"
                },
                address: {
                    icon: "mdi-map-marker",
                    data: "Rzeszów, Polska"  
                },
                email: {
                    icon: "mdi-email",
                    data: "pereiradawid@outlook.com"  
                }
            }
        },
    }
</script>

<style scoped>

</style>