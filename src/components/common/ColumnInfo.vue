<template>
    <v-flex xs12 md4>
        <v-card flat class="transparent">
            <v-card-text class="text-center">
                <v-icon x-large color="teal" class="blue--text text--lighten-2">{{icon}}</v-icon>
            </v-card-text>
            <v-card-title primary-title class="layout justify-center">
                <div class="headline">{{header}}</div>
            </v-card-title>
            <v-card-text>{{message}}</v-card-text>
        </v-card>
    </v-flex>
</template>

<script>
   export default {
       props:{
           icon : String,
           header : String,
           message : String
       }
   }
</script>

<style scoped>

</style>