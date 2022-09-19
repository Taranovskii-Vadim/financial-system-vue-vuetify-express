<template>
  <v-list density="compact" nav>
    <router-link v-for="item in items" :key="item.title" :to="item.path">
      <v-list-item
        :title="item.title"
        :prepend-icon="item.icon"
        :value="item.path"
      />
    </router-link>
  </v-list>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "navbarComponent",
  data() {
    return {
      items: [
        { title: "Счет", path: "/", icon: "mdi-home-city" },
        { title: "История", path: "/history", icon: "mdi-home-city" },
        { title: "Планирование", path: "/planning", icon: "mdi-account" },
        {
          title: "Новая запись",
          path: "/record",
          icon: "mdi-account-group-outline",
        },
        {
          title: "Категории",
          path: "/categories",
          icon: "mdi-account-group-outline",
        },
        // TODO add settings page in the end of list and logout button
      ],
    };
  },
});
</script>
