<template>
    <v-checkbox v-model="value" :label="label" class="mb-n8" color="teal" @change="valueChanged"></v-checkbox>
</template>

<script>
    export default {
        name: "search-checkbox",
        props: {
            value:  Boolean,
            label: String
        },
        methods:{
            valueChanged(){
                this.$emit('valueChanged', this.value)
            }
        }
    }
</script>

<style scoped>

</style>