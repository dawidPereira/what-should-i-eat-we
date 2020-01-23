<template>
    <v-text-field
            v-model="value"
            color="teal"
            :label="label"
            :rules="rules"
            class="teal--text input v-label"
            @input="valueChanged"
    ></v-text-field>
</template>

<script>
    export default {
        name: "teal-text-field",
        props: {
            label : String,
            rules : Function,
            value : Number
        },
        methods:{
            valueChanged(){
                this.$emit('valueChanged', this.value);
                console.log(this.$children[0].errorMessages);
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