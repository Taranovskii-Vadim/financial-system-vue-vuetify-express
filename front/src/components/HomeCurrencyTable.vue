<template>
  <v-card width="65%" height="400px" prepend-icon="mdi-home" variant="outlined">
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
          <tr v-for="{ key, rate, date } in data" :key="key">
            <td>{{ key }}</td>
            <td>{{ rate }}</td>
            <td>{{ date }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeCurrencyTableComponent",
  props: ["data"],
});
</script>
