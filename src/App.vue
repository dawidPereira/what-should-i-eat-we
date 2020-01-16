<template>
    <v-app>
        <v-content>
            <router-view></router-view>
        </v-content>
      <v-footer color="teal">
        <v-layout row wrap align-center>
          <div class="white--text" align-center>
            What Should I Eat 2020
          </div>
        </v-layout>
      </v-footer>
    </v-app>
</template>

<script lang="ts">
    import Vue from 'vue';
    import VeeValidate from 'vee-validate'

    export default Vue.extend({
        name: 'App',

        components: {
        },

        data: () => ({}),
    });
</script>
