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
      <FilterShopComponent @order="selectedOrder = $event" />
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
import FilterShopComponent from "@/components/FilterShopComponent.vue";

export default {
  name: "ShopView",
  components: {
    ProductCard,
    HeaderComponent,
    SearchBar,
    FilterShopComponent,
  },
  data() {
    return {
      products,
      searchQuery: "",
      selectedOrder: "",
    };
  },
  computed: {
    filteredProducts() {
      // 1. Filtrar por búsqueda
      let result = this.products.filter((item) => {
        const query = this.searchQuery.toLowerCase();

        return (
          item.name.toLowerCase().includes(query) || item.id.toString().includes(query)
        );
      });

      // 2. Ordenar según el filtro seleccionado
      switch (this.selectedOrder) {
        case "offer":
          result = result.filter((item) => item.offer === true);
          break;

        case "price-asc":
          result.sort((a, b) => a.price - b.price);
          break;

        case "price-desc":
          result.sort((a, b) => b.price - a.price);
          break;

        case "az":
          result.sort((a, b) => a.name.localeCompare(b.name));
          break;

        case "za":
          result.sort((a, b) => b.name.localeCompare(a.name));
          break;

        default:
          break;
      }

      return result;
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
