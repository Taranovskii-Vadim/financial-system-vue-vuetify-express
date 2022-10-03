<template>
  <div style="margin-bottom: 24px" class="flex">
    <h2>Планирование</h2>
  </div>
  <div
    style="margin-bottom: 16px"
    v-for="{ id, name, percent, limit, wasted } in categories"
    :key="id"
  >
    <p style="margin-bottom: 8px">
      <strong>{{ name }}:</strong>
      {{ wasted }} из {{ limit }}
    </p>
    <v-progress-linear :model-value="percent"></v-progress-linear>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "categoriesPage",
  data: () => ({
    categories: [],
  }),
  async mounted() {
    const categories = await this.$store.dispatch("getCategories");
    const records = await this.$store.dispatch("getRecords");

    const result = categories.map(({ id, name, limit }) => {
      const filtered = records.filter((item) => item.categoryId === id);

      const wasted = filtered.reduce((acc, { amount }) => acc + amount, 0);

      const percent = (wasted * 100) / limit;

      return { id, name, limit, wasted, percent };
    });

    this.categories = result;
  },
});
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: space-between;
}
</style>
