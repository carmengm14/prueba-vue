<template>
  <select
    v-model="selectedOrder"
    @change="$emit('order', selectedOrder)"
    class="orderSelect"
  >
    <option value="">Order by</option>
    <option value="offer">Offerts</option>
    <option value="price-asc">Cheapest first</option>
    <option value="price-desc">Most expensive first</option>
    <option value="az">A → Z</option>
    <option value="za">Z → A</option>
  </select>
</template>

<script>
export default {
  name: "OrderByShopComponent",
  data() {
    return {
      selectedOrder: "",
    };
  },
};
</script>

<style scoped>
.orderSelect {
  border: 1px solid #000;
  padding: 12px 40px 12px 12px;
  background: transparent;
  font-size: 14px;
  outline: none;
  border-radius: 0; /* sin radius */
}
</style>
