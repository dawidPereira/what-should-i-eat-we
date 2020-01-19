<template>
    <div>
        <v-subheader class="teal--text font-weight-bold justify-center ma-4">{{subheader}}</v-subheader>

        <v-col class="px-4">
                    <v-range-slider
                            v-model="value"
                            @change="valueChanged"
                            :max="max"
                            :min="min"
                            :step="step"
                            tick-size="100"
                            thumb-label="always"
                            class="align-center"
                            color="teal"
                            track-color="teal lighten-3"
                    >
                    </v-range-slider>
                </v-col>
    </div>
</template>

<script>
    export default {
        name: "range-slider-input",
        props: {
            subheader: String,
            max: Number,
            min: Number,
            value: {
                type: Array,
                default: [0, 100]
            },
            step: {
                type: Number,
                default: 1
            }
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