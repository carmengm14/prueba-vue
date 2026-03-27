<template>
  <div class="card" @click="goToDetail">
    <div v-if="product.offer" class="offerTag">OFFER</div>
    <img :src="getImage(product.image)" :alt="product.name" />
    <div class="infoProduct">
      <div class="infoContent">
        <h3>{{ product.name }}</h3>
        <div class="priceBox">
          <p v-if="product.offer" class="oldPrice">{{ product.oldPrice }} €</p>
          <p :class="['', { offerPrice: product.offer }]">{{ product.price }} €</p>
        </div>
      </div>

      <div class="ActionButtons">
        <button @click.stop="addProductToCart" class="buttonPrincipal">
          <svg width="20" height="20" style="margin-right: 15px" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M7 4h-2l-1 2h2l3.6 7.59-1.35 2.44c-.16.28-.25.61-.25.97 0 1.1.9 2 2 2h10v-2h-10l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1h-14zm-1 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
            />
          </svg>
          Add to cart
        </button>
        <button @click="goToDetail" class="buttonPrincipal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            style="margin-right: 15px"
          >
            <!-- Contorno del ojo -->
            <path
              d="M2 12C3.8 8 7.4 5 12 5C16.6 5 20.2 8 22 12C20.2 16 16.6 19 12 19C7.4 19 3.8 16 2 12Z"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <!-- Iris -->
            <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.8" />
            <!-- Pupila -->
            <circle cx="12" cy="12" r="1.3" fill="currentColor" />
          </svg>
          View Details
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { addToCart } from "@/utils/cart.js";

export default {
  name: "ProductCard",
  props: {
    product: Object,
  },
  methods: {
    getImage(img) {
      return require(`@/assets/${img}`);
    },
    goToDetail() {
      this.$router.push(`/product/${this.product.id}`);
    },
    addProductToCart() {
      addToCart(this.product);
      alert("Has añadido correctamente un producto al carrito");
    },
  },
};
</script>

<style scoped>
.card {
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.235);
  border-radius: 20px;
  margin: 0.2vh 0.2vw;
  width: 300px;
  display: flex;
  flex-direction: column; /* ← MUY IMPORTANTE */
}
.card:hover {
  cursor: pointer;
}
.card img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  margin-bottom: 1vh;
  border-radius: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.235);
}
.infoProduct {
  padding: 15px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* separa info arriba y botón abajo */
}

.infoProduct h3,
.infoProduct p {
  max-width: 150px;
}

.infoContent {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin: 0.5vh 0;
}

.card p {
  font-size: 25px;
  margin: 0;
}
.priceBox {
  display: flex;
  flex-direction: column; /* uno encima del otro */
  align-items: flex-end; /* alinea a la derecha */
}
.ActionButtons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1px;
}
</style>
