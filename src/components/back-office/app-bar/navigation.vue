<template>
    <v-navigation-drawer v-model="drawer" app>
        <v-list dense>
            <v-list-item link>
                <v-list-item-action>
                    <v-icon color="teal">mdi-home</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Strona główna</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item link>
                <v-list-item-action>
                    <v-icon color="teal">mdi-plus-box-multiple</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Dodaj produkt</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item link>
                <v-list-item-action>
                    <v-icon color="teal">mdi-plus-box</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Dodaj przepis</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: "navigation",
        props: {
            drawer: null
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../../styles/variables.scss';
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap');

</style>