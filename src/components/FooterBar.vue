<template>
<footer class="footer">
  <div class="footer-container">

    <!-- Columna 1: Logo -->
    <div class="footer-col">
      <img src="../assets/logo.png" alt="Logo" class="footer-logo">
    </div>

    <!-- Columna 2: Navegación -->
    <div class="footer-col" style="text-align: center; padding-top: 15px">
      <ul class="footer-nav">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/shop">Shop</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </div>

    <!-- Columna 3: Texto -->
    <div class="footer-col" style="text-align: justify;">
      <p>
        A small project that marks the start of a journey full of ideas, challenges and plenty of learning.
      </p>
    </div>

    <!-- Columna 4: Contacto -->
    <div class="footer-col" style="text-align: justify;">
      <p><span class="icon">📸</span> @user</p>
      <p><span class="icon">✉️</span> user@email.com</p>
      <p><span class="icon">📞</span> +34 000 000 000</p>
    </div>

  </div>

  <!-- Columna 5: Copyright -->
  <div class="footer-copy">
    My test website © Carmen García 2026
  </div>
</footer>


</template>

<script>
export default {
  name: "FooterBar"
}
</script>

<style scoped>

.footer {
  background-color: var(--color-primario);
  color: var(--color-blanco);
  padding: 4% 2%;
  text-align: center;
}

.footer-container {
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 4%;
  max-width: 70%;
  margin: 0 auto;
}

.footer-col {
  flex: 1 1 22%;
  min-width: 22%;
  max-width: 22%;
}

.footer-logo {
  width: 60%;
  max-width: 150px;
  display: block;
  margin: 0 auto;
}

.footer-nav {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-nav li {
  margin-bottom: 5%;
}

.footer-nav a {
  color: var(--color-blanco);
  text-decoration: none;
}

.footer-nav a:hover {
  text-decoration: underline;
}

.icon {
  margin-right: 3%;
}

.footer-copy {
  margin-top: 5%;
  font-size: 0.9rem;
  text-align: center;
}

.footer p{
  color: var(--color-blanco);
}

/* Tablets */
@media (max-width: 900px) {
  .footer-col {
    flex: 1 1 45%;
    min-width: 45%;
    max-width: 45%;
    text-align: center; /* centrado en tablet */
  }
}

/* Móviles */
@media (max-width: 600px) {
  .footer-col {
    flex: 1 1 100%;
    min-width: 100%;
    max-width: 100%;
    text-align: center; /* centrado en móvil */
  }

  .footer-container {
    gap: 20px;
  }
    /* Asegura que los iconos y el texto estén centrados */
  .footer-col p {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .footer-logo {
    width: 50%;
  }
}


</style>
