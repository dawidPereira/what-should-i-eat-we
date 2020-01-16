<template>
    <v-list-item>
        <v-list-item-action>
            <v-icon class="teal--text text--lighten-2">{{icon}}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
            <v-list-item-title>{{data}}</v-list-item-title>
        </v-list-item-content>
    </v-list-item>
</template>

<script>
    export default {
        name: "contact-list-item",
        props: {
            icon: String,
            data: String
        }
    }
</script>

<style scoped>

</style>