<template>
    <v-card :color="'teal'">
        <v-card-text class="white teal--text">
            <v-form ref="form"
                    lazy-validation="true">
                <v-container>
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-checkbox v-model="requirements.forVegan" :label="`Dla vegan`" color="teal"></v-checkbox>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-checkbox v-model="requirements.forVegetarian" :label="`Dla vegetarian`" color="teal"></v-checkbox>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-checkbox v-model="requirements.ecological" :label="`Z produktów ekologicznych`" color="teal"></v-checkbox>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-checkbox v-model="mealTypes.breakfast" :label="`Śniadanie`" color="teal"></v-checkbox>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-checkbox v-model="mealTypes.dinner" :label="`Obiad`" color="teal"></v-checkbox>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-checkbox v-model="mealTypes.supper" :label="`Kolacja`" color="teal"></v-checkbox>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-checkbox v-model="mealTypes.snack" :label="`Przekąska`" color="teal"></v-checkbox>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-checkbox v-model="mealTypes.sweets" :label="`Słodycze`" color="teal"></v-checkbox>
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
    export default {
        name: "requirement-card",
        data: () => ({
            valid: true,
            requirements:{
                forVegan: false,
                forVegetarian: false,
                ecological: false
            },
            mealTypes:{
                breakfast: false,
                dinner: false,
                supper: false,
                snack: false,
                sweets: false
            }
        }),
        methods: {
            clear() {
                this.$refs.form.reset()
            },
        }
    }
</script>

<style scoped>

</style>