<template>
  <div class="card">
    <div class="photo">
      <img :src="require(`../assets/${news.image}`)" alt="" />
      <p class="category"><span></span>{{ news.category }}</p>
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
  backdrop-filter: blur(4px);
  background-color: rgba(0, 0, 0, 0.325);
  border-radius: 20px;
  border: 1px solid white;
  padding: 5px 10px;
  color: white;
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
}
.data {
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
}
.icon {
  width: 15px;
  height: 15px;
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
