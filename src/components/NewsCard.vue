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
          <img src="../assets/iconoReloj.png" alt="" class="icon" />
          <span class="dataText">{{ news.data }}</span>
        </div>
        <div class="data">
          <img src="../assets/comentario.png" alt="" class="icon" />
          <span class="commentsNumber">{{ news.comments }}</span>
        </div>
      </div>
      <p class="descriptionNews">{{ shortDescription }}</p>
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
};
</script>

<style scoped>
.category.technology {
  border: 1px solid rgb(216, 109, 187);
  backdrop-filter: blur(4px);
  background-color: rgba(0, 0, 0, 0.853);
  color: rgb(216, 109, 187);
  box-shadow: 0 0 6px rgba(255, 255, 255, 0.325);
}

.category.design {
  border: 1px solid rgb(109, 209, 216);
  backdrop-filter: blur(4px);
  background-color: rgba(0, 0, 0, 0.853);
  color: rgb(109, 209, 216);
  box-shadow: 0 0 6px rgba(255, 255, 255, 0.325);
}
.category.technology span {
  background-color: rgb(216, 109, 187);
  box-shadow: 0 0 6px rgba(216, 109, 187, 0.325);
}
.category.design span {
  background-color: rgb(0, 174, 255);
  box-shadow: 0 0 6px rgb(0, 123, 255);
}

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
.category {
  position: absolute;
  top: 5px;
  left: 10px;
  border-radius: 20px;
  padding: 5px 10px;
  font-size: 12px;
}
.category span {
  display: inline-block;
  width: 8px;
  height: 8px;
  background-color: white; /* color del punto */
  border-radius: 50%;
  margin-right: 6px;
  animation: blink 1.2s infinite;
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

@keyframes blink {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(1.4);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
