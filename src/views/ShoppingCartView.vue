<template>
  <div class="contenidos-principales">
    <div class="">
      <ComeBackBtn />
      <div class="contenidos-principales">
        <h1>Your Shopping Cart</h1>

        <div v-if="cart.length === 0" class="emptyCart">
          <h2>SHOPPING CART IS EMPTY</h2>
          <router-link to="/shop" class="goShopping">GO SHOPPING NOW</router-link>
        </div>

        <div v-else class="cartList">
          <div v-for="item in cart" :key="item.id" class="cartItem">
            <img :src="require(`@/assets/${item.image}`)" />

            <div class="info">
              <h3>{{ item.name }}</h3>
              <p>{{ item.price }} €</p>

              <label>
                Quantity:
                <select v-model="item.quantity" @change="updateQuantity">
                  <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
                </select>
              </label>
              <br /><br />

              <button
                @click="removeItem(item.id)"
                style="border: none; background-color: transparent !important"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3 6H5H21"
                    stroke="#ff3b3b"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M8 6V4C8 3.44772 8.44772 3 9 3H15C15.5523 3 16 3.44772 16 4V6"
                    stroke="#ff3b3b"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M19 6L18.2 20.2C18.15 21.15 17.35 22 16.4 22H7.6C6.65 22 5.85 21.15 5.8 20.2L5 6"
                    stroke="#ff3b3b"
                    stroke-width="2"
                  />
                  <path
                    d="M10 11V17"
                    stroke="#ff3b3b"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M14 11V17"
                    stroke="#ff3b3b"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div class="cartInfo">
            <h2>Total:</h2>
            <p class="totalPrice">{{ totalPrice }}€</p>
          </div>

          <button class="clearBtn" @click="clearCart">Clear cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ComeBackBtn from "@/components/ComeBackBtn.vue";
import { getCart, saveCart } from "@/utils/cart.js";

export default {
  name: "ShoppingCartView",
  components: {
    ComeBackBtn,
  },
  data() {
    return {
      cart: getCart(),
    };
  },
  computed: {
    totalPrice() {
      return this.cart
        .reduce((acc, item) => acc + item.price * item.quantity, 0)
        .toFixed(2);
    },
  },
  methods: {
    removeItem(id) {
      this.cart = this.cart.filter((item) => item.id !== id);
      saveCart(this.cart);
    },
    clearCart() {
      this.cart = [];
      saveCart([]);
    },
    updateQuantity() {
      saveCart(this.cart);
    },
  },
};
</script>

<style scoped>
.emptyCart {
  text-align: center;
  margin-top: 50px;
}

.emptyCart h2 {
  font-size: 28px;
  margin-bottom: 20px;
  letter-spacing: 1px;
}

.goShopping {
  display: inline-block;
  padding: 12px 25px;
  border: 1px solid #000;
  text-decoration: none;
  color: inherit;
  transition: 0.3s ease;
}

.goShopping:hover {
  background: #000;
  color: #fff;
}

.cartList {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.cartItem {
  display: flex;
  gap: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
}

.cartItem img {
  width: 120px;
  height: 150px;
  object-fit: cover;
}

.clearBtn {
  margin-top: 20px;
  padding: 10px 20px;
  border: 1px solid #000;
  background: transparent;
  cursor: pointer;
}

.cartInfo {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
}

.totalPrice {
  font-size: 25px;
  font-weight: bold;
}
</style>
