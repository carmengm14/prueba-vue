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
            <span class="commentsNumber">{{ news.commentsData.length }} Comments</span>
          </div>
        </div>
        <h1 class="blogTitle" v-if="news">{{ news.newsTitle }}</h1>
        <p class="blogContent" v-if="news">{{ news.content }}</p>
        <div class="comments-section" v-if="news && news.commentsData">
          <h2>Comments</h2>
          <div class="comment" v-for="comment in visibleComments" :key="comment.id">
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
          <div v-if="news && news.commentsData.length > 4" class="load-more">
            <button @click="showAllComments = !showAllComments" class="buttonPrincipal">
              {{ showAllComments ? "Show less" : "Read more comments" }}
            </button>
          </div>
        </div>
        <div class="leaveYourCommentSection">
          <div class="add-comment" v-if="news">
            <h2>Leave your comment here :P</h2>
            <div class="rating">
              <span
                v-for="n in 5"
                :key="n"
                @click="newComment.score = n"
                :class="{ active: n <= newComment.score }"
              >
                ★
              </span>
            </div>

            <input v-model="newComment.user" type="text" placeholder="Your name" />

            <input v-model="newComment.email" type="email" placeholder="Your email" />

            <textarea
              v-model="newComment.text"
              placeholder="Write your comment..."
            ></textarea>
            <button @click="submitComment">Send comment</button>
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
      newComment: {
        user: "",
        email: "",
        text: "",
        score: 0,
      },
      showAllComments: false,
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
    visibleComments() {
      if (!this.news || !this.news.commentsData) return [];

      return this.showAllComments
        ? this.news.commentsData
        : this.news.commentsData.slice(0, 4);
    },
  },
  methods: {
    submitComment() {
      if (!this.newComment.user || !this.newComment.text) return;

      const comment = {
        id: Date.now(),
        User: this.newComment.user,
        UserMail: this.newComment.email,
        score: this.newComment.score,
        comment: this.newComment.text,
        commentDate: new Date().toISOString().split("T")[0],
      };

      this.news.commentsData.push(comment);

      // reset form
      this.newComment = {
        user: "",
        email: "",
        text: "",
        score: 0,
      };
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
  border-top: 1px solid var(--color-primario);
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
  line-height: 1.2;
  width: 60%;
}
.load-more {
  display: flex;
  justify-content: flex-start;
  margin: 20px 0;
}

/*Leave a comment section*/
.add-comment {
  width: 100%;
  max-width: 750px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.add-comment input,
.add-comment textarea {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
}

.add-comment textarea {
  min-height: 100px;
  resize: none;
}

.add-comment button {
  padding: 10px;
  border: none;
  background: var(--color-primario);
  color: var(--color-blanco);
  cursor: pointer;
  border-radius: 6px;
}

.rating {
  display: flex;
  gap: 5px;
  font-size: 22px;
  cursor: pointer;
}

.rating span {
  color: #ccc;
}

.rating span.active {
  color: #f5a623;
}
</style>
