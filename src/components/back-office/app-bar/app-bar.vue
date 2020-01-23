<template>
    <v-app id="inspire">
        <navigation :drawer="drawer"></navigation>

        <v-app-bar app color="teal" dark>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <v-toolbar-title>Administracja</v-toolbar-title>
        </v-app-bar>
        <v-content style="padding: 0px 0px 0px 0px">
            <v-container style="margin-left: 32px">
                <v-row>
                    <v-col justify="start">
                        <slot></slot>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
        <v-footer color="teal" app>
            <span class="white--text">&copy; 2019</span>
        </v-footer>
    </v-app>
</template>

<script>
    import Navigation from "@/components/back-office/app-bar/navigation";
    export default {
        name: 'app-bar',
        components: {Navigation},
        props: {
            source: String,
        },
        data: () => ({
            drawer: null,
        }),
    }
</script>

<style lang="scss" scoped>
    @import '../../../styles/variables.scss';
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap');

</style>