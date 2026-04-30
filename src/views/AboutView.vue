<template>
  <div>
    <HeaderComponent
      title="About us"
      subtitle="Meet us and stay up to date :P"
      :bgImage="require('@/assets/foto-contacto2.jpg')"
    />
    <div class="container">
      <h1>NEWS</h1>
      <div class="newsContainer">
        <NewsCard v-for="item in newsList" :key="item.id" :news="item" />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import NewsCard from "@/components/NewsCard.vue";
import newsData from "@/jsonPruebas/news.json";

export default {
  name: "AboutView",
  components: {
    HeaderComponent,
    NewsCard,
  },
  data() {
    return {
      newsList: newsData,
    };
  },
};
</script>

<style scoped>
.container {
  margin-top: 5vh;
}
.newsContainer {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
}
</style>
