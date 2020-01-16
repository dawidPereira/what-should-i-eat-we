<template>
    <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-12">
            <column-info icon="mdi-information-outline" header="O nas">
                <v-card-text>Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                </v-card-text>
            </column-info>
                
           <contact-list/>
        </v-layout>
    </v-container>
</template>

<script>
    import ContactList from "@/components/common/contact-list";
    import ColumnInfo from "@/components/common/column-info";
    export default {
        name: "about",
        components: {ColumnInfo, ContactList}
    }
</script>

<style scoped>

</style>