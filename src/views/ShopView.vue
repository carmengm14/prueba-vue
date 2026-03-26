<template>
  <div>
    <h1>SHOP</h1>
    <div class="products">
    <ProductCard 
        v-for="item in products"
        :key="item.id"
        :product="item"
        />
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
import products from "@/jsonPruebas/products.json";

export default {
  name: "ShopView",
  components: { ProductCard },
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
