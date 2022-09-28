<template>
  <v-card width="30%" height="400px" prepend-icon="mdi-home" variant="outlined">
    <template v-slot:title>Счет в валюте</template>
    <v-card-text v-for="{ currency, value } in curriencyBill" :key="currency">
      {{ value }}
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeCurrencyBillComponent",
  props: ["data"],
  computed: {
    curriencyBill() {
      const bill = this.$store.getters.userInfo.bill;
      const common: Intl.NumberFormatOptions = { style: "currency" };

      const result = Object.keys(this.data).map((currency) => {
        const num = bill / this.data[currency];

        const value = new Intl.NumberFormat("ru-RU", { ...common, currency });

        return { currency, value: value.format(num) };
      });

      return result;
    },
  },
});
</script>
