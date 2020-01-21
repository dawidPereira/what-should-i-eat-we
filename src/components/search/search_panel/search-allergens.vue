<template>
    <div>
        <v-subheader class="font-weight-bold ma-n1 mb-n6">Alergeny:</v-subheader>
        <search-column class="ma-n1">
            <search-checkbox label="Mleko krowie"  @valueChanged="milkValueChanged"></search-checkbox>
            <search-checkbox label="Jaja kurze" @valueChanged="eggsValueChanged"></search-checkbox>
            <search-checkbox label="Pszenica" @valueChanged="wheatValueChanged"></search-checkbox>
            <search-checkbox label="Ryby i skorupiaki" @valueChanged="shellfishValueChanged"></search-checkbox>
            <search-checkbox label="Soja" @valueChanged="soyValueChanged"></search-checkbox>
            <search-checkbox label="Orzechy" @valueChanged="nutsValueChanged"></search-checkbox>
        </search-column>
    </div>
</template>

<script>
    import SearchColumn from "./search-column";
    import SearchCheckbox from "./search-checkbox";

    export default {
        name: "search-allergens",
        components: {SearchCheckbox, SearchColumn},
        props: {
            data: {
                type: Object,
                default: () => ({
                    allergens: {
                        milk : Boolean,
                        eggs : Boolean,
                        wheat : Boolean,
                        shellfish : Boolean,
                        soy: Boolean,
                        nuts : Boolean,
                    },
                })
            }
        },
        methods: {
            milkValueChanged(value) {
                this.data.allergens.milk = value;
                this.$emit('valueChanged', this.data)
            },
            eggsValueChanged(value) {
                this.data.allergens.eggs = value;
                this.$emit('valueChanged', this.data)
            },
            wheatValueChanged(value) {
                this.data.allergens.wheat = value;
                this.$emit('valueChanged', this.data)
            },
            shellfishValueChanged(value) {
                this.data.allergens.shellfish = value;
                this.$emit('valueChanged', this.data)
            },
            soyValueChanged(value) {
                this.data.allergens.soy = value;
                this.$emit('valueChanged', this.data)
            },
            nutsValueChanged(value) {
                this.data.allergens.nuts = value;
                this.$emit('valueChanged', this.data)
            },
        }
    }
</script>

<style scoped>
    .label-message{
        font-size: .8rem !important;
    }

</style>