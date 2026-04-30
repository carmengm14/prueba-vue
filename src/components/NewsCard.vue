<template>
  <div class="card">
    <div class="photo">
      <img :src="require('../assets/' + news.image)" alt="" />
      <p class="category" :class="categoryClass"><span></span>{{ news.category }}</p>
    </div>
    <div class="info">
      <p class="newsTitle">{{ news.newsTitle }}</p>
      <div class="metaInfo">
        <div class="data">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgb(175,175,175)"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="9"></circle>
            <path d="M12 7v5l3 3"></path>
          </svg>
          <span class="dataText">{{ news.data }}</span>
        </div>
        <div class="data">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgb(175,175,175)"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"
            ></path>
          </svg>
          <span class="commentsNumber">{{ news.commentsData.length }}</span>
        </div>
      </div>
      <p class="descriptionNews">{{ shortDescription }}</p>
      <button class="btn-more" @click="goToNews">
        <span>Read more</span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M9 6l6 6-6 6"></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsCard",
  props: {
    news: Object,
  },
  computed: {
    shortDescription() {
      const text = this.news.Description;
      if (text.length <= 100) return text;
      return text.slice(0, 100).split(" ").slice(0, -1).join(" ") + "...";
    },
    categoryClass() {
      if (!this.news) return "";
      return (this.news.category || "").toLowerCase().trim().replace(/\s+/g, "");
    },
  },
  methods: {
    goToNews() {
      this.$router.push(`/news/${this.news.id}`);
    },
  },
};
</script>

<style scoped>
.card {
  width: 350px;
  margin: 20px 20px;
  border: 1px gainsboro solid;
  border-radius: 12px;
}
.card:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.048);
}
.photo {
  position: relative;
}
.photo img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px 12px 0px 0px;
}
.info {
  padding: 2px 15px 15px 15px;
}
.metaInfo {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 30px;
  color: rgb(175, 175, 175);
  font-size: 15px;
  margin-top: -15px;
}
.newsTitle {
  font-weight: bold;
  font-size: 20px;
  text-align: left;
  line-height: 22px;
}
.data {
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-top: 10px;
  align-items: center;
}
.icon {
  width: 15px;
  height: 15px;
}
.descriptionNews {
  line-height: 22px;
}

.btn-more {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: var(--color-primario);
  color: var(--color-blanco);
  transition: 0.3s;
}

.btn-more:hover {
  cursor: pointer;
}

.btn-more svg {
  transition: transform 0.2s ease;
}

.btn-more:hover svg {
  transform: translateX(6px);
}
</style>
