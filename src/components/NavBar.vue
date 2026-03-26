<template>
  <nav class="navbar">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/shop">Shop</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
.navbar {
  background: var(--color-primario);
  padding: 1vh 15vw;
}

.navbar ul {
  display: flex;
  gap: 1rem;
  list-style: none;
}

.navbar a {
  color: var(--color-blanco);
  text-decoration: none;
}
</style>
