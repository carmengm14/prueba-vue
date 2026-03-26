<template>
  <div>
    <HeaderComponent 
      title="My First App with Vue" 
      subtitle="By Menxu" 
      btn="Know more about us" 
      btnUrl="/about"
      :bgImage="require('@/assets/fondo-header.jpg')"
      />
    
 <ContentBoxImage 
    position="L" 
    :bgImage="require('@/assets/foto-home-about-us.jpg')" 
    text="Learning Vue represents a significant step forward in any developer’s professional growth. Its progressive approach allows you to start with small features and evolve towards complex applications without losing clarity or control. Furthermore, its ecosystem featuring tools such as Vue Router and Pinia promotes best practices and a more robust architecture. Working with Vue also enhances your ability to think in terms of reusable components, something highly valued in modern professional environments. And, as if that weren’t enough, mastering Vue opens doors in a market where companies are seeking developers capable of creating fast, scalable and easy-to-maintain interfaces." 
    btn="Meet me" 
    btnUrl="/about"/>

 <ContentBoxImage 
    position="R" 
    :bgImage="require('@/assets/foto-shop.jpg')" 
    title="My shop" 
    text="Welcome to our shop, a space designed for those who appreciate quality, design and the little details that make all the difference. Here you’ll find products carefully selected to inspire you and accompany you in your daily life. Our aim is to offer you a warm, simple and stylish experience, so that every visit becomes a new discovery. Explore, enjoy and make yourself at home!" 
    btn="Visit shop" 
    btnUrl="/shop"/>
  </div>
  
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import ContentBoxImage from '@/components/ContentBoxImage.vue';

export default {
  name: "HomeView",
  components: {
    HeaderComponent,
    ContentBoxImage
  }
}
</script>
