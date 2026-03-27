<template>
  <div class="contenidos-principales">
    <div class="contenidoBox">
      <div class="imgBox"></div>
      <div class="formContainer">
        <h2>Contact now</h2>

        <form @submit.prevent="handleSubmit" method="post">
          <!-- Nombre -->
          <div class="formGroup">
            <label>Name</label>
            <input type="text" v-model="form.name" />
            <p v-if="errors.name" class="error">{{ errors.name }}</p>
          </div>
          ∫
          <!-- Email -->
          <div class="formGroup">
            <label>Email</label>
            <input type="email" v-model="form.email" />
            <p v-if="errors.email" class="error">{{ errors.email }}</p>
          </div>

          <!-- Mensaje -->
          <div class="formGroup">
            <label>Message</label>
            <textarea v-model="form.message"></textarea>
            <p v-if="errors.message" class="error">{{ errors.message }}</p>
          </div>

          <button class="buttonPrincipal" type="submit">Send</button>

          <!-- Mensaje de éxito -->
          <p v-if="successMessage" class="success">{{ successMessage }}</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasicFormComponent",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
      errors: {},
      successMessage: "",
    };
  },

  methods: {
    validateForm() {
      this.errors = {};

      if (!this.form.name.trim()) {
        this.errors.name = "Name is required";
      }

      if (!this.form.email.trim()) {
        this.errors.email = "Email is required";
      } else if (!/^\S+@\S+\.\S+$/.test(this.form.email)) {
        this.errors.email = "Email is not valid";
      }

      if (!this.form.message.trim()) {
        this.errors.message = "Message is required";
      }

      return Object.keys(this.errors).length === 0;
    },

    handleSubmit() {
      if (!this.validateForm()) {
        this.successMessage = "";
        return;
      }

      // Guardar en localStorage
      const savedForms = JSON.parse(localStorage.getItem("contactForms")) || [];
      savedForms.push({ ...this.form, date: new Date().toISOString() });
      localStorage.setItem("contactForms", JSON.stringify(savedForms));

      // Mensaje de éxito
      this.successMessage = "Message sent successfully!";

      // Limpiar formulario
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
    },
  },
};
</script>

<style scoped>
.contenidoBox {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
}

.imgBox {
  background-image: url("@/assets/foto-contacto2.jpg");
  background-position: center;
  background-size: cover;
  width: 50%;
  flex: 1;
  min-height: 200px;
}

.formContainer {
  width: 50%;
  padding: 10vh 5vh;
}

.formGroup {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

input,
textarea {
  padding: 10px;
  border: 1px solid #aaa;
  border-radius: 6px;
}
@media (max-width: 900px) {
  .imgBox,
  .formContainer {
    width: 100%;
    flex: none;
  }

  .formContainer {
    padding: 3vh 0;
  }
}
</style>
