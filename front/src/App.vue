<template>
  <component :is="layout">
    <router-view />
  </component>
  <v-snackbar v-model="snackbar" :timeout="2000">{{ text }}</v-snackbar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainLayout from "@/components/MainLayout.vue";
import EmptyLayout from "@/components/EmptyLayout.vue";

export default defineComponent({
  name: "App",
  data: () => ({ snackbar: false, text: "" }),
  computed: {
    snackbarText() {
      return this.$store.getters.snackbarText;
    },
    layout() {
      return `${this.$route.meta.layout}-layout`;
    },
  },
  watch: {
    snackbarText(text) {
      this.text = text;
      this.snackbar = true;
    },
  },
  components: { EmptyLayout, MainLayout },
});
</script>

<style>
html,
body {
  margin: 0;
}

a {
  text-decoration: none;
  color: initial;
}
</style>
