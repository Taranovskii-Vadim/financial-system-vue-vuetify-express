<template>
  <form @submit.prevent="" class="root">
    <v-text-field label="Логин"></v-text-field>
    <v-text-field label="Пароль"></v-text-field>
    <v-btn type="submit">Войти</v-btn>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginPage",
});
</script>

<style scoped>
.root {
  width: 650px;
}
</style>
