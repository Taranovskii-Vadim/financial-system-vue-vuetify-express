<template>
  <div style="margin-bottom: 24px" class="flex">
    <h2>Счет</h2>
    <v-btn icon="mdi-cached" color="primary" />
  </div>
  <Loader v-if="isLoading" />
  <div v-else class="flex">
    <HomeCurrencyBill :data="curriencies" />
    <v-card
      width="65%"
      height="400px"
      prepend-icon="mdi-home"
      variant="outlined"
    >
      <template v-slot:title>Курс валют</template>
      <v-card-text>
        <v-table>
          <thead>
            <tr>
              <th class="text-left">Валюта</th>
              <th class="text-left">Курс</th>
              <th class="text-left">Дата</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="{} in curriencies" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.calories }}</td>
              <td>{{ item.calories }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeCurrencyBill from "@/components/HomeCurrencyBill.vue";

export default defineComponent({
  name: "HomePage",
  data: () => ({ isLoading: true, curriencies: null }),
  components: { HomeCurrencyBill },
  async mounted() {
    try {
      const curriencies = await this.$store.dispatch("getCurrencies");
      this.curriencies = curriencies;
      this.isLoading = false;
    } catch (e) {
      console.log(e);
    }
  },
});
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
