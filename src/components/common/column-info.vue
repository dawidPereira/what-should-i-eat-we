<template>
    <v-col xs12 md4>
        <v-card flat class="transparent">
            <v-card-text class="text-center">
                <v-icon x-large color="teal" class="blue--text text--lighten-2">{{icon}}</v-icon>
            </v-card-text>
            <v-card-title primary-title class="layout justify-center">
                <div class="headline">{{header}}</div>
            </v-card-title>
            <slot></slot>
        </v-card>
    </v-col>
</template>

<script>
   export default {
       name: "column-info",
       props:{
           icon : String,
           header : String,
       }
   }
</script>

<style scoped>

</style>