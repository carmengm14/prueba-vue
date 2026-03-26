<template>
  <div class="card" @click="goToDetail">
    <div v-if="product.offer" class="offerTag">
      OFFER
    </div>
    <img :src="getImage(product.image)" :alt="product.name">
    <div class="infoProduct">
    <div class="infoHeader">
        <h3>{{ product.name }}</h3>
        <div class="priceBox">
          <p v-if="product.offer" class="oldPrice">{{ product.oldPrice }} €</p>
          <p :class="['', { offerPrice: product.offer }]"> {{ product.price }} €</p>
        </div>
    </div>

    <button class="buttonPrincipal" style="width: 100%;" @click="goToDetail">
        View details
    </button>
</div>

  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: Object
  },
  methods: {
    getImage(img) {
      return require(`@/assets/${img}`);
    },
     goToDetail() {
        this.$router.push(`/product/${this.product.id}`);
    }
  }
}
</script>


<style scoped>
.card{
    position: relative;
    border: 1px solid black; 
    margin: 0.2vh 0.2vw;
    width: 300px;
}
.card:hover{
    cursor: pointer;
}
.card img{
    width: 300px;
    height: 300px;
    object-fit: cover;
    margin-bottom: 1vh
}
.infoProduct {
  padding: 15px;
}

.infoProduct h3,
.infoProduct p {
  max-width: 150px;
}

.infoHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin: 0.5vh 0
}

.card p{
    font-size: 25px;
    margin: 0;
}
.priceBox {
  display: flex;
  flex-direction: column; /* uno encima del otro */
  align-items: flex-end;  /* alinea a la derecha */
}



</style>