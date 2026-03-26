<template>
  <div id="app">
    <NavBar />
    <main class="contenido-web">
      <router-view/>
    </main>
    <FooterBar />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import FooterBar from "./components/FooterBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
    FooterBar
  }
};
</script>

<style>

</style>
