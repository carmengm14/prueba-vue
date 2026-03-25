<template>
  <div id="app">
    <NavBar />
    <router-view class="contenido-web"/>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar
  }
};
</script>

<style>

</style>
