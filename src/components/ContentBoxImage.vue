<template>
    <div class="box">
  
    <!-- Imagen izquierda -->
    <div v-if="position === 'L'" 
        class="imgBox" 
        :style="{ backgroundImage: 'url(' + bgImage + ')' }">
    </div>

    <div class="content">
        <h2>{{title}}</h2>
        <p>{{ text }}</p>
        <button class="buttonPrincipal" style="margin-top: 2vh" @click="$router.push(btnUrl)">
        {{ btn }}
        </button>
    </div>

    <!-- Imagen derecha -->
    <div v-if="position === 'R'" 
        class="imgBox" 
        :style="{ backgroundImage: 'url(' + bgImage + ')' }">
    </div>

</div>
</template>

<script>
export default {
  name: "ContentBoxImage",
  props: {
    title: String,
    text: String,
    btn: String,
    btnUrl: String,
    bgImage: String,
    position: {
        type: String,
        default: "L" // por defecto la imagen a la izquierda
        }
}
}
</script>

<style scoped>
.box{
    margin: 2% 20%;
    display: flex;
    align-items: stretch; /* fuerza a ambos a tener la misma altura */
    justify-content: center;
    align-items: center;
}
.imgBox{
    width: 50%;
    min-height: 400px;
    background-size: cover;
    background-position: center;
}
.content{
    width: 50%;
    padding: 2vh 3vw;
}
.content h2{
    text-transform: uppercase;
}

@media (max-width: 900px) {
  .box {
    margin: 2% 5%;      /* menos margen en pantallas pequeñas */
    flex-direction: column; /* imagen arriba, texto abajo */
  }

  .imgBox {
    width: 100%;
    min-height: 250px; /* más pequeño para móvil */
  }

  .content {
    width: 100%;
    padding: 3vh 4vw;
  }
}


</style>
