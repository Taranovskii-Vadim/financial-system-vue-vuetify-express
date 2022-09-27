<template>
  <div class="root">
    <v-progress-circular indeterminate color="primary" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({ name: "loaderComponent" });
</script>

<style scoped>
.root {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
