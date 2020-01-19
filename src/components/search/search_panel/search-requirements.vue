<template>
    <div>
        <v-subheader class="font-weight-bold ma-n1 mb-n6">Dodatkowe wymagania:</v-subheader>
        <search-column class="ma-n1">
            <search-checkbox label="Z produktów wegetariańskich" @valueChanged="vegetarianValueChanged"></search-checkbox>
            <search-checkbox label="Z produktów wegańskich" @valueChanged="veganValueChanged"></search-checkbox>
            <search-checkbox label="Z produktów ekologicznych" @valueChanged="ecologicalValueChanged"></search-checkbox>
        </search-column>
    </div>
</template>

<script>
    import SearchColumn from "./search-column";
    import SearchCheckbox from "./search-checkbox";

    export default {
        name: "search-requirements",
        components: {SearchCheckbox, SearchColumn},
        props: {
            data: {
                type: Object,
                default: () => ({
                    requirements: {
                        forVegan : Boolean,
                        forVegetarian : Boolean,
                        ecological : Boolean,
                    },
                })
            }
        },
        methods: {
            vegetarianValueChanged(value) {
                this.data.requirements.forVegetarian = value;
                this.$emit('valueChanged', this.data)
            },
            veganValueChanged(value) {
                this.data.requirements.forVegan = value;
                this.$emit('valueChanged', this.data)
            },
            ecologicalValueChanged(value) {
                this.data.requirements.ecological = value;
                this.$emit('valueChanged', this.data)
            },
        }
    }
</script>

<style scoped>

</style>