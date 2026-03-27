<template>
  <div class="content">
    <input
      type="text"
      v-model="searchQuery"
      @input="$emit('search', searchQuery)"
      placeholder="Search products..."
      class="searchInput"
    />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      searchQuery: "",
    };
  },
};
</script>

<style scoped>
.content {
  display: flex;
  justify-content: flex-end; /* empuja el buscador a la derecha */
  width: 100%;
}
.searchInput {
  width: 25%;
  padding: 12px 40px 12px 12px; /* espacio para la lupa */
  border: 1px solid #000;
  background: transparent;
  font-size: 14px;
  outline: none;
  border-radius: 0; /* sin radius */
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C8.01 14 6 11.99 6 9.5S8.01 5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14z'/></svg>");
  background-repeat: no-repeat;
  background-size: 20px;
  background-position: right 10px center; /* lupa a la derecha */
}
</style>
