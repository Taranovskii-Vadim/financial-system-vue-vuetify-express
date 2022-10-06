<template>
  <div style="margin-bottom: 24px" class="flex">
    <h2>История записей</h2>
  </div>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">#</th>
        <th class="text-left">Сумма</th>
        <th class="text-left">Категория</th>
        <th class="text-left">Описание</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="{ id, amount, description, category } in records" :key="id">
        <td>{{ id }}</td>
        <td>{{ amount }}</td>
        <td>{{ category.name }}</td>
        <td>{{ description }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "historyPage",
  data: () => ({
    records: [],
  }),
  async mounted() {
    const records = await this.$store.dispatch("getRecords");
    const config = new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
    });

    this.records = records.map(({ amount, ...others }) => ({
      amount: config.format(amount),
      ...others,
    }));
  },
});
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: space-between;
}
</style>
