<template>
  <div id="app">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">
    
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
