<template>
    <v-text-field
            v-model="data"
            color="teal"
            :label="label"
            outlined
            :rules="rules"
            class="teal--text"
    ></v-text-field>
</template>

<script>
    export default {
        name: "teal-text-field",
        props: {
            label : String,
            data : String,
            rules : Function
        }
    }
</script>

<style scoped>

</style>