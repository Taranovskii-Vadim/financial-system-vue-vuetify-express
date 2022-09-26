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
    <v-snackbar v-model="snackbar" :timeout="2000">{{ text }}</v-snackbar>
  </v-form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const mapText: Record<string, string> = {
  logout: "Вы вышли из системы",
};

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
    // form
    valid: false,
    email: "",
    password: "",
    emailRules,
    passwordRules,
    // snackbar
    text: "",
    snackbar: false,
  }),
  mounted() {
    const message = this.$route.query.message as string;

    if (message) {
      this.text = mapText[message] || "Что-то пошло не так...";
      this.snackbar = true;
    }
  },
  methods: {
    async handleSubmit() {
      if (this.valid) {
        try {
          const payload = {
            email: this.email,
            password: this.password,
          };

          await this.$store.dispatch("login", payload);

          this.$router.push("/");
        } catch (e) {
          console.error(e);
        }
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
