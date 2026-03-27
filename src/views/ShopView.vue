<template>
  <div>
    <HeaderComponent
      title="SHOP"
      subtitle="Buy now your future favorite clothes"
      btn="Contact now"
      btnUrl="/contact"
      :bgImage="require('@/assets/foto-shop.jpg')"
    />
    <div class="contenidos-principales">
      <SearchBar @search="searchQuery = $event" />
      <div class="products">
        <ProductCard v-for="item in filteredProducts" :key="item.id" :product="item" />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import ProductCard from "@/components/ProductCard.vue";
import products from "@/jsonPruebas/products.json";
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "ShopView",
  components: {
    ProductCard,
    HeaderComponent,
    SearchBar,
  },
  data() {
    return {
      products,
      searchQuery: "",
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter((item) => {
        const query = this.searchQuery.toLowerCase();

        return (
          item.name.toLowerCase().includes(query) || item.id.toString().includes(query) // ← búsqueda por texto de nombre y por ID del producto
        );
      });
    },
  },
};
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
