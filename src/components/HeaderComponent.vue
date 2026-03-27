<template>
  <div class="header" :style="{ backgroundImage: 'url(' + bgImage + ')' }">
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>
    <button
      v-if="btn && btnUrl"
      class="buttonTransparenteBlanco"
      style="margin-top: 2vh"
      @click="$router.push(btnUrl)"
    >
      {{ btn }}
    </button>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: {
    title: String,
    subtitle: String,
    btn: String,
    btnUrl: String,
    bgImage: String,
  },
};
</script>

<style scoped>
.header {
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 300px;
  margin: 0 !important;
  padding: 10vh 20vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.header h1,
h2,
h3 {
  color: var(--color-blanco);
}
.header h1 {
  font-size: 50px;
}
.header h2 {
  font-size: 25px;
}

@media (max-width: 900px) {
  .header h1 {
    font-size: 30px;
  }
  .header h2 {
    font-size: 20px;
  }
}
</style>
