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
      <div class="content">
        <OrderByShopComponent
          @order="
            selectedOrder = $event;
            itemsToShow = 8;
          "
        />

        <SearchBar
          @search="
            searchQuery = $event;
            itemsToShow = 8;
          "
        />
      </div>
      <div class="products">
        <ProductCard v-for="item in filteredProducts" :key="item.id" :product="item" />
      </div>
      <button
        v-if="itemsToShow < products.length"
        @click="itemsToShow += 8"
        class="loadMoreBtn"
      >
        Ver más...
      </button>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import ProductCard from "@/components/ProductCard.vue";
import products from "@/jsonPruebas/products.json";
import SearchBar from "@/components/SearchBar.vue";
import OrderByShopComponent from "@/components/OrderByShopComponent.vue";

export default {
  name: "ShopView",
  components: {
    ProductCard,
    HeaderComponent,
    SearchBar,
    OrderByShopComponent,
  },
  data() {
    return {
      products,
      searchQuery: "",
      selectedOrder: "",
      itemsToShow: 8,
    };
  },
  computed: {
    // Todos los productos filtrados + ordenados (sin límite)
    processedProducts() {
      let result = this.products.filter((item) => {
        const query = this.searchQuery.toLowerCase();

        return (
          item.name.toLowerCase().includes(query) || item.id.toString().includes(query)
        );
      });

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
      }

      return result;
    },

    // Solo los que se muestran en la vista
    filteredProducts() {
      return this.processedProducts.slice(0, this.itemsToShow);
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
.content {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
}
.loadMoreBtn {
  margin: 30px auto;
  display: block;
  padding: 12px 30px;
  border: 1px solid #000;
  background: transparent;
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s ease;
}

.loadMoreBtn:hover {
  background: #000;
  color: #fff;
}
@media (max-width: 768px) {
  .content {
    flex-direction: column; /* uno debajo del otro */
    align-items: stretch; /* que ocupen todo el ancho */
    gap: 10px; /* separación más pequeña */
    width: 100%;
    margin-bottom: 20px;
  }

  .content > * {
    width: 100%; /* cada filtro ocupa todo el ancho */
  }

  .products {
    margin-top: 2vh;
  }
}
</style>
