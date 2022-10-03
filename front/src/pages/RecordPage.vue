<template>
  <div style="margin-bottom: 24px" class="flex">
    <h2>Новая запись</h2>
  </div>
  <v-form style="width: 650px" v-model="valid" @submit.prevent="handleSubmit">
    <v-select
      v-model="categoryId"
      :items="categories"
      item-title="name"
      item-value="id"
      label="Категория"
    />
    <v-text-field width="100%" v-model="amount" label="Сумма"></v-text-field>
    <v-text-field
      width="100%"
      v-model="description"
      label="Описание"
    ></v-text-field>
    <v-btn block color="primary" type="submit">Создать</v-btn>
  </v-form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "categoriesPage",
  data: () => ({
    categories: [],
    categoryId: null,
    amount: null,
    description: "",
  }),
  async mounted() {
    const result = await this.$store.dispatch("getCategories");
    this.categories = result;
  },
  methods: {
    async handleSubmit() {
      try {
        if (this.amount && this.categoryId) {
          const payload = {
            amount: this.amount,
            categoryId: this.categoryId,
            description: this.description,
          };
          this.$store.dispatch("createRecord", payload);
        }
      } catch (e) {
        console.log(e);
      }
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
