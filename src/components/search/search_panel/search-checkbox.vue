<template>
    <v-checkbox v-model="value" :label="label" class="mb-n8 v-label v-input"  color="teal" @change="valueChanged"></v-checkbox>
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
    .v-label >>> label{
          font-size: .8rem;
      }
    .v-input >>> div ::before{
        margin-top: -6px;
        margin-bottom: 6px;
    }
</style>