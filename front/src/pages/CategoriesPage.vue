<template>
  <div style="margin-bottom: 24px" class="flex">
    <h2>Категории</h2>
  </div>
  <div class="flex">
    <v-form style="width: 650px" v-model="valid" @submit.prevent="handleSubmit">
      <v-text-field
        width="100%"
        v-model="name"
        label="Наименование"
      ></v-text-field>
      <v-text-field width="100%" v-model="limit" label="Лимит"></v-text-field>
      <div>{{ categories }}</div>
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
    name: "",
    limit: 100,
  }),
  methods: {
    async handleSubmit() {
      if (this.name && this.limit) {
        const payload = { name: this.name, limit: this.limit };
        const id = await this.$store.dispatch("createCategory", payload);
        this.categories.push({ id, ...payload });
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
