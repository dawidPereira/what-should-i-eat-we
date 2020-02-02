<template>
    <v-text-field
            v-model="value"
            color="teal"
            :label="label"
            :rules="rules"
            class="teal--text input v-label"
            :disabled="disabled"
            @change="valueChanged"
    ></v-text-field>
</template>

<script>
    export default {
        name: "teal-text-field",
        props: {
            label : String, 
            rules : Function,
            value: String,
            disabled: false
        },
        methods:{
            valueChanged(){
                let result = this.value;
                this.$emit('valueChanged', result);
            },
        }
    }
</script>

<style scoped>
    .input{
        font-size: .9rem !important;
    }
    .v-label >>> label{
        font-size: .8rem;
    }
</style>