<template>
  <v-form v-model="valid" @submit.prevent="handleSubmit">
    <v-text-field label="Почта" v-model="email" :rules="emailRules" />
    <v-text-field
      type="password"
      label="Пароль"
      v-model="password"
      :rules="passwordRules"
    />
    <v-text-field label="Имя" v-model="name" :rules="nameRules" />
    <v-checkbox v-model="agree" label="Согласен с правилами" />
    <v-btn block :disabled="!agree" color="primary" type="submit">Войти</v-btn>
    <p style="margin-top: 10px">
      Есть аккаунт?
      <router-link style="color: blue; text-decoration: underline" to="/signIn"
        >Войти</router-link
      >
    </p>
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

const nameRules = [
  ...commonRules,
  (v: any) => v.length >= 3 || "Must be more than 3 characters",
];

export default defineComponent({
  name: "LoginPage",
  data: () => ({
    valid: false,
    email: "",
    password: "",
    name: "",
    agree: false,
    nameRules,
    emailRules,
    passwordRules,
  }),
  methods: {
    async handleSubmit() {
      if (this.valid && this.agree) {
        const payload = {
          name: this.name,
          email: this.email,
          password: this.password,
        };

        await this.$store.dispatch("register", payload);

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
