<template>
  <div style="margin-bottom: 24px" class="flex">
    <h2>Категории</h2>
  </div>
  <div class="flex">
    <CategoriesAdd @createCategory="createCategory" />
    <CategoriesUpdate :data="categories" @updateCategory="updateCategory" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CategoriesAdd from "@/components/CategoriesAdd.vue";
import CategoriesUpdate from "@/components/CategoriesUpdate.vue";

export default defineComponent({
  name: "categoriesPage",
  components: { CategoriesAdd, CategoriesUpdate },
  data: () => ({
    categories: [],
  }),
  methods: {
    async createCategory(payload) {
      const id = await this.$store.dispatch("createCategory", payload);
      this.categories.push({ id, ...payload });
    },
    async updateCategory(payload) {
      console.log(payload);
    },
  },
});
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: space-between;
}
</style>
