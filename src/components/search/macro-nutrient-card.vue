<template>
    <v-card :color="'teal'">
       
        <v-card-text class="white teal--text">
            <v-form ref="form"
                    lazy-validation="true">
                <v-container>
                    <v-row >
                        <v-col cols="12" md="4">
                            <teal-text-field label="Minimalna ilość białka" :data="proteins.lowerLimit" :rules="macroNutrientRule"></teal-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                            <teal-text-field label="Maksymalna ilość białka" :data="proteins.upperLimit" :rules="macroNutrientRule"></teal-text-field>
                        </v-col>
                    </v-row>
                    <v-row >
                        <v-col cols="12" md="4">
                            <teal-text-field label="Minimalna ilość węglowodanów" :data="carbohydrates.lowerLimit" :rules="macroNutrientRule"></teal-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                            <teal-text-field label="Maksymalna ilość węglowodanów" :data="carbohydrates.upperLimit" :rules="macroNutrientRule"></teal-text-field>
                        </v-col>
                    </v-row>
                    <v-row >
                        <v-col cols="12" md="4">
                            <teal-text-field label="Minimalna ilość tłuszczy" :data="fats.lowerLimit" :rules="macroNutrientRule"></teal-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                            <teal-text-field label="Maksymalna ilość tłuszczy" :data="fats.upperLimit" :rules="macroNutrientRule"></teal-text-field>
                        </v-col>
                    </v-row>
                    <v-btn class="mr-4 white--text" color="teal" dark @click="e1 = 2">Dalej</v-btn>
                    <v-btn class="mr-4 white--text" @click="submit" color="teal">Szukaj</v-btn>
                    <v-btn class="white--text" @click="clear" color="teal">Wyczyść</v-btn>
                </v-container>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
    import TealTextField from "@/components/search/teal-text-field";

    export default {
        name: "macro-nutrient-card",
        components: {TealTextField},
        data : () => ({
            valid: true,
            
            proteins:{
                lowerLimit : undefined,
                upperLimit: undefined
            },
            carbohydrates:{
                lowerLimit : undefined,
                upperLimit: undefined
            },
            fats:{
                lowerLimit : undefined,
                upperLimit: undefined
            },
            macroNutrientRule: [
                v => !v || v >= 0 && v <= 500 || 'Makroskładniku musza znajdować się w przedziale od 0 do 500 gram.',
            ],
        }),
        methods :{
            clear(){
                this.$refs.form.reset()
            },
        }
    }
</script>

<style scoped>

</style>