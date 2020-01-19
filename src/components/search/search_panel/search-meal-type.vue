<template>
    <div>
        <v-subheader class="font-weight-bold ma-n1 mb-n6">Rodzaj posiłku:</v-subheader>
        <search-column class="ma-n1">
            <search-checkbox label="Śniadanie" @valueChanged="breakfastValueChanged"></search-checkbox>
            <search-checkbox label="Obiad" @valueChanged="dinnerValueChanged"></search-checkbox>
            <search-checkbox label="Kolacja" @valueChanged="supperValueChanged"></search-checkbox>
            <search-checkbox label="Przekąska" @valueChanged="snackValueChanged"></search-checkbox>
            <search-checkbox label="Słodycze" @valueChanged="sweetsValueChanged"></search-checkbox>
        </search-column>
    </div>
</template>

<script>
    import SearchColumn from "./search-column";
    import SearchCheckbox from "./search-checkbox";

    export default {
        name: "search-meal-type",
        components: {SearchCheckbox, SearchColumn},
        props: {
            data: {
                type: Object,
                default: () => ({
                    mealTypes: {
                        breakfast : Boolean,
                        dinner : Boolean,
                        supper : Boolean,
                        snack : Boolean,
                        sweets : Boolean,
                    },
                })
            }
        },
        methods: {
            breakfastValueChanged(value) {
                this.data.mealTypes.breakfast = value;
                this.$emit('valueChanged', this.data)
            },
            dinnerValueChanged(value) {
                this.data.mealTypes.dinner = value;
                this.$emit('valueChanged', this.data)
            },
            supperValueChanged(value) {
                this.data.mealTypes.supper = value;
                this.$emit('valueChanged', this.data)
            },
            snackValueChanged(value) {
                this.data.mealTypes.snack = value;
                this.$emit('valueChanged', this.data)
            },
            sweetsValueChanged(value) {
                this.data.mealTypes.sweets = value;
                this.$emit('valueChanged', this.data)
            },
        }
    }
</script>

<style scoped>

</style>