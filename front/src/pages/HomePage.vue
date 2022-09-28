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
      <v-card-text> This is content </v-card-text>
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
