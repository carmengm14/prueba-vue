<template>
  <div>
    <HeaderComponent
      title="About us"
      subtitle="My first Vue App"
      :bgImage="require('@/assets/foto-contacto.jpg')"
    />
    <div class="newsContainer">
      <NewsCard v-for="item in newsList" :key="item.id" :news="item" />
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
.newContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
