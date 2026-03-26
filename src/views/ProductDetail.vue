<template>
  <div class="contenidos-principales">
  <div class="productDetail">

    <button class="backButton" @click.stop="$router.go(-1)">
      <svg width="16" height="16" viewBox="0 0 24 24">
        <path fill="currentColor" d="M15 18l-6-6 6-6"/>
      </svg>
      Comeback Shop
    </button>

    <div v-if="product" class="detailContainer">

      <div class="imageContainer">
         <div v-if="product.offer" class="offerTag">
            OFFER
        </div>
        <img :src="require(`@/assets/${product.image}`)" :alt="product.name" />
      </div>

      <div class="infoContainer">
        <h1>{{ product.name }}</h1>
       <div class="priceBox">
          <p v-if="product.offer" class="oldPrice">{{ product.oldPrice }} €</p>
          <p :class="['price', { offerPrice: product.offer }]"> {{ product.price }} €</p>
        </div>
        <p class="description">{{ product.shortDescription }}</p>
        <button class="buttonPrincipal" @click.stop="$inBuildingProccess"> 
            <svg width="20" height="20" style="margin-right: 15px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M7 4h-2l-1 2h2l3.6 7.59-1.35 2.44c-.16.28-.25.61-.25.97 0 1.1.9 2 2 2h10v-2h-10l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1h-14zm-1 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
            </svg> Add to cart
        </button>
      </div>
    </div>

    <p v-else>Producto no encontrado</p>

  </div>
</div>
</template>


<script>
import products from "@/jsonPruebas/products.json";

export default {
  name: "ProductDetail",
  props: ["id"],
  computed: {
    product() {
      return products.find(p => p.id == this.id);
    }
  }
}
</script>


<style scoped>

/* Contenedor principal: imagen izquierda + info derecha */
.detailContainer {
  display: flex;
  gap: 40px;
  align-items: flex-start;
  align-content: center;
}

/* Imagen */
.imageContainer{
    position: relative;
}
.imageContainer img {
    width: 500px;
    height: 600px;
    object-fit: cover;
}

/* Info del producto */
.infoContainer {
  flex: 1;
}

.infoContainer h1 {
  margin: 0 0 10px 0;
}

.price {
  font-size: 28px;
  font-weight: bold;
  margin: 0 0 20px 0;
}
.priceBox {
  display: flex;
  flex-direction: column; /* uno encima del otro */
  align-items: flex-start;  /* alinea a la derecha */
}
.description {
  font-size: 18px;
  line-height: 1.4;
}
@media (max-width: 768px) {
  .detailContainer {
    flex-direction: column;   /* ← uno debajo del otro */
    align-items: center;      /* centra todo */
    text-align: justify;       /* opcional, queda más bonito */
  }

  .imageContainer img {
    width: 100%;              /* que la imagen se adapte al móvil */
    max-width: 350px;         /* límite para que no sea gigante */
    height: auto;
  }

  .infoContainer {
    width: 100%;
  }
}

</style>
