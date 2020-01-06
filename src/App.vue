<template>
  <v-app>
    <v-content>
      <HomePage/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import HomePage from './components/HomePage.vue';

export default Vue.extend({
  name: 'App',

  components: {
    HomePage,
  },

  data: () => ({
    //
  }),
});
</script>
