<template>
  <section>
     <Hero/>
    <Info/>
      <section>
        <v-parallax src="../assets/home_bottom.jpg" height="460">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-4 text-center">Diata jeszce nigdy nie była tak łatwa</div>
            <em>Nie czekaj, znajdź coś dla siebie</em>
            <v-btn
                    class="mt-12"
                    color="teal"
                    dark
                    large
                    href="/pre-made-themes"
            >
              Zaczynamy
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <About/>

      <v-footer color="teal">
        <v-layout row wrap align-center>
            <div class="white--text" align-center>
              What Should I Eat 2020
            </div>
        </v-layout>
      </v-footer>
  </section>
</template>
<script>
  import Hero from '../components/home/Hero.vue';
  import Info from "@/components/home/Info";
  import About from "@/components/home/About";
  export default {
    components:{
      About,
      Info,
      Hero
    }
  }
</script>

<style>
  .v_parallax_image_bottom{
    @include object-fit: (cover, top) !important;
  }
  .transparent--icon{
    opacity: 0.5;
  }
</style>
