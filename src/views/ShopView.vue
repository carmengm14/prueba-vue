<template>
  <div>
    <HeaderComponent 
      title="SHOP" 
      subtitle="Buy now your future favorite clothes" 
      btn="Contact now" 
      btnUrl="/contact" 
      :bgImage="require('@/assets/foto-shop.jpg')"/>
    <div class="contenidos-principales">
      <div class="products">
          <ProductCard 
              v-for="item in products"
              :key="item.id"
              :product="item"
              />
          </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import ProductCard from '@/components/ProductCard.vue';
import products from "@/jsonPruebas/products.json";

export default {
  name: "ShopView",
  components: { 
    ProductCard,
    HeaderComponent
  },
  data() {
    return {
      products
    }
  }
}
</script>

<style scoped>
.products {
    margin-top: 3vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-items: center;
    gap: 1rem;
}

</style>
