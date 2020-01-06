<template>
    <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-12">
            <ColumnInfo :icon="'mdi-information-outline'" :header="'O nas'" :message="'Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.\n'+
'                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n'+
'                        Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.'"/>
           <Contact/>
        </v-layout>
    </v-container>
</template>

<script>
    import Contact from "../common/Contact";
    import ColumnInfo from "../common/ColumnInfo";
    export default {
        name: "About",
        components: {ColumnInfo, Contact}
    }
</script>

<style scoped>

</style>