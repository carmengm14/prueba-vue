import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/styles.css"


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

/* 
Esto hace tres cosas:
- Crea la instancia principal de Vue
- Le dice “usa este router”
- Renderiza App.vue dentro del <div id="app"> del index.html
Sin esta línea, Vue Router no funcionaría.
*/
