<template>
    <v-card :color="'teal'">
        <v-card-text class="white teal--text">
            <v-form ref="form"
                    lazy-validation="true">
                <v-container>
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-checkbox v-model="milk" :label="`Mleko`" color="teal"></v-checkbox>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-checkbox v-model="gluten" :label="`Gluten`" color="teal"></v-checkbox>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-checkbox v-model="nuts" :label="`Orzechy`" color="teal"></v-checkbox>
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
        name: "allergens-card",
        data: () => ({
            valid: true,
            milk: false,
            nuts: false,
            gluten: false
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