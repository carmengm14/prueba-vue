<template>
  <div>
    <HeaderComponent
      title="Contact"
      subtitle="Get in touch now"
      :bgImage="require('@/assets/foto-contacto.jpg')"
    />
    <BasicFormComponent />∫
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import BasicFormComponent from "@/components/BasicFormComponent.vue";

export default {
  name: "ContactView",
  components: {
    HeaderComponent,
    BasicFormComponent,
  },
};
</script>
