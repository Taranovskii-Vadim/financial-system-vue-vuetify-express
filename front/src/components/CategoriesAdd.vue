<template>
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
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "categoriesAddComponent",
  data: () => ({
    valid: false,
    name: "",
    limit: 100,
  }),
  methods: {
    handleSubmit() {
      if (this.name && this.limit) {
        const payload = { name: this.name, limit: this.limit };
        this.$emit("createCategory", payload);
      }
    },
  },
});
</script>
