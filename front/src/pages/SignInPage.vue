<template>
  <v-form v-model="valid" @submit.prevent="handleSubmit">
    <v-text-field label="Почта" v-model="email" :rules="emailRules" />
    <v-text-field
      type="password"
      label="Пароль"
      v-model="password"
      :rules="passwordRules"
    />
    <v-btn block color="primary" type="submit">Войти</v-btn>
  </v-form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const commonRules = [(v: any) => !!v || "Field is required"];

const emailRules = [
  ...commonRules,
  (v: any) => /.+@.+/.test(v) || "E-mail must be valid",
];

const passwordRules = [
  ...commonRules,
  (v: any) => v.length <= 6 || "Must be less than 6 characters",
];

export default defineComponent({
  name: "LoginPage",
  data: () => ({
    valid: false,
    email: "",
    password: "",
    emailRules,
    passwordRules,
  }),
  methods: {
    async handleSubmit() {
      if (this.valid) {
        const payload = {
          email: this.email,
          password: this.password,
        };

        await this.$store.dispatch("login", payload);

        this.$router.push("/");
      }
    },
  },
});
</script>

<style scoped>
.root {
  width: 650px;
}

.formFooter {
  margin-top: 15px;
}
</style>
