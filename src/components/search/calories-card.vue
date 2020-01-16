<template>
    <v-card :color="'teal'">
        <v-card-text class="white teal--text">
            <v-form ref="form"
                    lazy-validation="true">
                <v-container>
                    <v-row >
                        <v-col cols="12" md="4">
                            <teal-text-field label="Minimalna ilość kalorii" :data="lowerLimit" :rules="caloriesRules"></teal-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                            <teal-text-field label="Maksymalna ilość kalori" :data="upperLimit" :rules="caloriesRules"></teal-text-field>
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
        name: "calories-card",
        components: {TealTextField},
        data: () => ({
            valid: true,
            lowerLimit: undefined,
            upperLimit: undefined,
            caloriesRules: [
                v => !v || v >= 200 && v <= 2000 ||  'Calorie muszą być w przedziale od 200 do 2000.',
            ],
        }),
        
        methods :{
            clear(){
                this.$refs.form.reset()
            },
            submit(){
                if (this.$refs.form.validate()) {
                    this.snackbar = true
                }
            }
        }
    }
</script>

<style scoped>

</style>