<template>
  <nav class="navbar">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/shop">Shop</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
      <li>
        <router-link to="/shoppingCart" class="cartIcon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M7 7V6C7 3.79086 8.79086 2 11 2H13C15.2091 2 17 3.79086 17 6V7"
              stroke="white"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 7H18L19 20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20L6 7Z"
              stroke="white"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 11C10 12.1046 9.10457 13 8 13C6.89543 13 6 12.1046 6 11"
              stroke="white"
              stroke-width="1.6"
              stroke-linecap="round"
            />
            <path
              d="M18 11C18 12.1046 17.1046 13 16 13C14.8954 13 14 12.1046 14 11"
              stroke="white"
              stroke-width="1.6"
              stroke-linecap="round"
            />
          </svg>
          <span class="cartCount">{{ cartCount }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { getCart } from "@/utils/cart.js";

export default {
  name: "NavBar",
  computed: {
    cartCount() {
      return getCart().reduce((acc, item) => acc + item.quantity, 0);
    },
  },
};
</script>

<style scoped>
.navbar {
  background: var(--color-primario);
  padding: 1vh 15vw;
  justify-content: center;
}

.navbar ul {
  display: flex;
  gap: 1rem;
  list-style: none;
  justify-content: end;
}

.navbar a {
  color: var(--color-blanco);
  text-decoration: none;
}
</style>
