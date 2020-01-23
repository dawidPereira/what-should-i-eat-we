<template>
    <v-card>
        <v-col class="ma-4">
            <v-card-title class="teal--text font-weight-bold ml-n4">{{name}}</v-card-title>
            <v-form>
                <teal-text-field label="Nazwa przepisu" @valueChanged="nameChanged" class="mr-8"></teal-text-field>
                <teal-text-field label="Zdjęcie" @valueChanged="nameChanged" class="mr-8"></teal-text-field>
                <v-subheader class="font-weight-bold header ml-n4">Szczegóły:</v-subheader>
                <v-col>
                    <v-row>
                        <teal-text-field label="czas przygotowania / min" class="mr-8"></teal-text-field>
                        <teal-text-field label="koszt / pln" class="mr-8"></teal-text-field>
                        <teal-text-field label="ilość porcji" class="mr-8"></teal-text-field>
                        <v-select :items="items" label="poziom trudności" color="teal" class="teal--text input v-label mr-8"></v-select>
                    </v-row>
                </v-col>
                <v-subheader class="font-weight-bold header ml-n4">Opis:</v-subheader>
                <v-col>
                   
                </v-col>
            </v-form>
        </v-col>
    </v-card>
</template>

<script>
    import TealTextField from "@/components/search/teal-text-field";
    export default {
        name: "add-recipe-card",
        components: {TealTextField},
        data: () => ({
            name: "Genialny przepis",
            items: [1,2,3,4,5]
        }),
        methods:{
            nameChanged(value) {
                this.name = value;
            }
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