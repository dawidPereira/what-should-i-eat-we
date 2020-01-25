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
                <v-col class="ml-n4">
                    <div>
                    <tiptap-vuetify
                            v-model="content"
                            :extensions="extensions"
                    />
                    </div>
                </v-col>
            </v-form>
        </v-col>
    </v-card>
</template>

<script>
    import TealTextField from "@/components/search/teal-text-field";
    import { TiptapVuetify, Heading, Bold, Italic, Strike, Underline, Code, Paragraph, BulletList, OrderedList, ListItem, Link, Blockquote, HardBreak, HorizontalRule, History } from 'tiptap-vuetify'
    import 'tiptap-vuetify/dist/main.css'
    export default {
        name: "add-recipe-card",
        components: {TealTextField, TiptapVuetify},
        data: () => ({
            name: "Genialny przepis",
            items: [1,2,3,4,5],
            editor: null,
            extensions: [
                History,
                Blockquote,
                Link,
                Underline,
                Strike,
                Italic,
                ListItem,
                BulletList,
                OrderedList,
                [Heading, {
                    options: {
                        levels: [1, 2, 3]
                    }
                }],
                Bold,
                Code,
                HorizontalRule,
                Paragraph,
                HardBreak
            ],
            // starting editor's content
            content: `
      <h1>Yay Headlines!</h1>
      <p>All these <strong>cool tags</strong> are working now.</p>
    `
        }),
        methods:{
            nameChanged(value) {
                this.name = value;
            }
        },
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