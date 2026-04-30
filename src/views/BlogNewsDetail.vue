<template>
  <p>Hola</p>
</template>

<script>

export default {
  name: "ProductDetail",
  props: ["id"],
  computed: {
    product() {
      return products.find((p) => p.id == this.id);
    },
  },
  components: {
    ComeBackBtn,
  },
  methods: {
    addProductToCart() {
      addToCart(this.product);
      alert("Producto añadido al carrito");
    },
  },
};
</script>

<style scoped></style>
