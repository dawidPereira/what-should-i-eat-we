<template>
    <v-container>
        <v-subheader class="font-weight-bold ma-n1 mb-n6">Kalorie:</v-subheader>
        <v-row no-gutters>
            <search-column>
                <teal-text-field label="od" :rules="caloriesRules" ref="input"
                                 @valueChanged="caloriesLowerLimitChanged"></teal-text-field>
            </search-column>
            <search-column>
                <teal-text-field label="do" :rules="caloriesRules" ref="input"
                                 @valueChanged="caloriesUpperLimitChanged"></teal-text-field>
            </search-column>
        </v-row>

        <v-subheader class="font-weight-bold ma-n1 mb-n6">Białko:</v-subheader>
        <v-row no-gutters>
            <search-column>
                <teal-text-field label="od" :rules="caloriesRules" ref="input"
                                 @valueChanged="proteinLowerLimitChanged"></teal-text-field>
            </search-column>
            <search-column>
                <teal-text-field label="do" :rules="caloriesRules" ref="input"
                                 @valueChanged="proteinUpperLimitChanged"></teal-text-field>
            </search-column>
        </v-row>

        <v-subheader class="font-weight-bold ma-n1 mb-n6">Węglowodany:</v-subheader>
        <v-row no-gutters>
            <search-column>
                <teal-text-field label="od" :rules="caloriesRules" ref="input"
                                 @valueChanged="carbohydratesLowerLimitChanged"></teal-text-field>
            </search-column>
            <search-column>
                <teal-text-field label="do" :rules="caloriesRules" ref="input"
                                 @valueChanged="carbohydratesUpperLimitChanged"></teal-text-field>
            </search-column>
        </v-row>

        <v-subheader class="font-weight-bold ma-n1 mb-n6">Tłuszcz:</v-subheader>
        <v-row no-gutters>
            <search-column>
                <teal-text-field label="od" :rules="caloriesRules" ref="input"
                                 @valueChanged="fatLowerLimitChanged"></teal-text-field>
            </search-column>
            <search-column>
                <teal-text-field label="do" :rules="caloriesRules" ref="input"
                                 @valueChanged="fatUpperLimitChanged"></teal-text-field>
            </search-column>
        </v-row>
    </v-container>
</template>

<script>
    import SearchColumn from "./search-column";
    import TealTextField from "../teal-text-field";

    export default {
        name: "search-input",
        components: {TealTextField, SearchColumn},
        props: {
            data: {
                type: Object,
                default: () => ({
                    calories: {
                        lowerLimit: Number,
                        upperLimit: Number,
                    },
                    carbohydrates: {
                        lowerLimit: Number,
                        upperLimit: Number
                    },
                    fat: {
                        lowerLimit: Number,
                        upperLimit: Number
                    },
                    protein: {
                        lowerLimit: Number,
                        upperLimit: Number
                    },
                })
            }
        },
        data: () => ({
            caloriesRules: [
                v => isValid(v) || 'Musisz podać liczbę.',
            ],
        }),

        methods: {
            caloriesLowerLimitChanged(value) {
                this.data.calories.lowerLimit = value;
                this.$emit('valueChanged', this.data)
            },
            caloriesUpperLimitChanged(value) {
                this.data.calories.upperLimit = value;
                this.$emit('valueChanged', this.data)
            },
            proteinLowerLimitChanged(value) {
                this.data.protein.lowerLimit = value;
                this.$emit('valueChanged', this.data)
            },
            proteinUpperLimitChanged(value) {
                this.data.protein.upperLimit = value;
                this.$emit('valueChanged', this.data)
            },
            carbohydratesLowerLimitChanged(value) {
                this.data.carbohydrates.lowerLimit = value;
                this.$emit('valueChanged', this.data)
            },
            carbohydratesUpperLimitChanged(value) {
                this.data.carbohydrates.upperLimit = value;
                this.$emit('valueChanged', this.data)
            },
            fatLowerLimitChanged(value) {
                this.data.fat.lowerLimit = value;
                this.$emit('valueChanged', this.data)
            },
            fatUpperLimitChanged(value) {
                this.data.fat.upperLimit = value;
                this.$emit('valueChanged', this.data)
            },
            clear() {
                this.data.calories.lowerLimit = undefined;
                this.data.calories.upperLimit = undefined;
                this.data.protein.lowerLimit = undefined;
                this.data.protein.upperLimit = undefined;
                this.data.carbohydrates.lowerLimit = undefined;
                this.data.carbohydrates.upperLimit = undefined;
                this.data.fat.lowerLimit = undefined;
                this.data.fat.upperLimit = undefined;
                this.$emit('valueChanged', this.data)
            },
        },
    }

    function isValid(v) {
        if (v !== undefined && !isFunction(v)) {
            return !isNaN(v);
        }
        return true;
    }
    
    function isFunction(functionToCheck) {
        return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
    }
</script>

<style scoped>

</style>