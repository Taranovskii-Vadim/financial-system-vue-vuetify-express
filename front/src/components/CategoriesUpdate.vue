<template>
  <v-form style="width: 650px" v-model="valid" @submit.prevent="handleSubmit">
    <v-select
      v-model="select"
      :items="data"
      item-title="name"
      item-value="id"
      label="Категория"
    />
    <div>{{ data }}</div>
    <v-text-field
      width="100%"
      v-model="name"
      label="Наименование"
    ></v-text-field>
    <v-text-field width="100%" v-model="limit" label="Лимит"></v-text-field>
    <v-btn block color="primary" type="submit">Сохранить</v-btn>
  </v-form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "categoriesUpdateComponent",
  props: ["data"],
  data: () => ({
    select: null,
    name: "",
    limit: 100,
  }),
  methods: {
    handleSubmit() {
      if (this.select && this.name && this.limit) {
        const payload = { id: this.select, name: this.name, limit: this.limit };
        this.$emit("updateCategory", payload);
      }
    },
  },
});
</script>
