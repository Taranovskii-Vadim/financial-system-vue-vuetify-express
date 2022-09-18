<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EmptyLayout from "@/components/EmptyLayout.vue";

export default defineComponent({
  name: "App",
  computed: {
    layout() {
      return `${this.$route.meta.layout}-layout`;
    },
  },
  components: { EmptyLayout },
});
</script>

<style>
html,
body {
  margin: 0;
}
</style>
