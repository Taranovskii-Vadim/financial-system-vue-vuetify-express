<template>
  <div style="margin-bottom: 24px" class="flex">
    <h2>Счет</h2>
    <v-btn icon="mdi-cached" color="primary" @click="refreshData" />
  </div>
  <Loader v-if="isLoading" />
  <div v-else class="flex">
    <HomeCurrencyBill :data="curriencies" />
    <HomeCurrencyTable :data="curriencies" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeCurrencyBill from "@/components/HomeCurrencyBill.vue";
import HomeCurrencyTable from "@/components/HomeCurrencyTable.vue";

export default defineComponent({
  name: "HomePage",
  data: () => ({ isLoading: true, curriencies: null }),
  components: { HomeCurrencyBill, HomeCurrencyTable },
  async mounted() {
    try {
      const curriencies = await this.$store.dispatch("getCurrencies");
      this.curriencies = curriencies;
      this.isLoading = false;
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    async refreshData() {
      this.isLoading = true;
      const curriencies = await this.$store.dispatch("getCurrencies");
      this.curriencies = curriencies;
      this.isLoading = false;
    },
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
