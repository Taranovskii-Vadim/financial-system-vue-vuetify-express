<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        permanent
        v-model="drawer"
        :rail="rail"
        @click="rail = false"
      >
        <v-list-item
          nav
          title="Вадим Тарановский"
          prepend-avatar="https://randomuser.me/api/portraits/men/86.jpg"
        >
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>
        <v-divider></v-divider>
        <Navbar />
      </v-navigation-drawer>
      <v-main><router-view /></v-main>
    </v-layout>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";

export default defineComponent({
  name: "mainLayout",
  components: { Navbar },
  data() {
    return {
      drawer: true,
      rail: true,
    };
  },
});
</script>
