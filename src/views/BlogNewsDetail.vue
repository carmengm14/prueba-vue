<template>
  <div class="contenidos-principales">
    <ComeBackBtn />
    <div class="photo">
      <img class="imgBlog" :src="require('../assets/' + news.image)" alt="" />
      <p class="category" :class="categoryClass"><span></span>{{ news.category }}</p>
    </div>
    <div class="news">
      <div class="content">
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
            <span class="commentsNumber">{{ news.comments }} Comments</span>
          </div>
        </div>
        <h1 class="blogTitle" v-if="news">{{ news.newsTitle }}</h1>
        <p class="blogContent" v-if="news">{{ news.content }}</p>
        <div class="comments-section" v-if="news && news.commentsData">
          <h2>Comments</h2>
          <div class="comment" v-for="comment in news.commentsData" :key="comment.id">
            <div class="comment-header">
              <p class="user">{{ comment.User }}</p>
              <div class="infoDateComment">
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
                <p class="date">{{ comment.commentDate }}</p>
              </div>
            </div>

            <div class="stars">
              <span v-for="n in 5" :key="n">
                {{ n <= comment.score ? "★" : "☆" }}
              </span>
            </div>

            <p class="text">{{ comment.comment }}</p>
          </div>
        </div>
      </div>
      <ComeBackBtn />
    </div>
  </div>
</template>

<script>
import newsData from "@/jsonPruebas/news.json";
import ComeBackBtn from "@/components/ComeBackBtn.vue";

export default {
  name: "BlogNewsDetail",

  data() {
    return {
      news: null,
    };
  },

  components: {
    ComeBackBtn,
  },

  created() {
    const id = this.$route.params.id;

    this.news = newsData.find((n) => n.id == id);
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
.photo {
  position: relative;
  overflow: hidden;
  margin-bottom: 5vh;
}
.imgBlog {
  width: 100%;
  height: 600px;
  object-fit: cover;
  display: block;
}
.metaInfo {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 30px;
  color: rgb(175, 175, 175);
  font-size: 15px;
  margin-bottom: 15px;
}
.news {
  display: flex;
  align-items: center;
  flex-flow: column wrap;
}
.data {
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-top: 10px;
  align-items: center;
}
.content {
  width: 80%;
}
.blogTitle {
  text-transform: uppercase;
}
.comments-section {
  width: 100%;
  margin: 60px auto;
  border-top: 1px solid black;
  padding-top: 40px;
}

.comment {
  border-bottom: 1px solid #eaeaea;
}

.comment-header {
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  color: gray;
  font-size: 14px;
}

.user {
  font-weight: bold;
  color: #333;
}

.infoDateComment {
  display: flex;
  flex-wrap: wrap row;
  align-items: center;
  gap: 5px;
}
.date {
  color: rgb(175, 175, 175);
}

.stars {
  color: #f5a623;
  font-size: 18px;
}

.text {
  font-size: 15px;
  color: #444;
  line-height: 1;
}
</style>
