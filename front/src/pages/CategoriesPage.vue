<template>
  <div style="margin-bottom: 24px" class="flex">
    <h2>Категории</h2>
  </div>
  <div class="flex">
    <v-form style="width: 650px" v-model="valid" @submit.prevent="handleSubmit">
      <v-text-field
        width="100%"
        v-model="title"
        label="Наименование"
      ></v-text-field>
      <v-text-field width="100%" v-model="limit" label="Лимит"></v-text-field>
      <v-btn block color="primary" type="submit">Создать</v-btn>
    </v-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "categoriesPage",
  data: () => ({
    categories: [],
    valid: false,
    title: "",
    limit: 100,
  }),
  methods: {
    async handleSubmit() {
      if (this.title && this.limit) {
        console.log(this.title, this.limit);
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
