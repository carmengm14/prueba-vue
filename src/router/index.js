import Vue from "vue";
import VueRouter from "vue-router";

import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import ShopView from "@/views/ShopView.vue";
import ProductDetail from "@/views/ProductDetail.vue";
import ShoppingCartView from "@/views/ShoppingCartView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView
  },
  {
    path: "/about",
    name: "About",
    component: AboutView
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactView
  },
  {
    path: "/shop",
    name: "Shop",
    component: ShopView
  },
  {
  path: '/product/:id',
  name: 'ProductDetail',
  component: ProductDetail,
  props: true
  },
  {
    path: '/shoppingCart',
    name: 'ShoppingCartView',
    component: ShoppingCartView,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
