<template>
  <v-list density="compact" nav>
    <v-list-item
      link
      v-for="item in items"
      :key="item.path"
      :to="item.path"
      :title="item.title"
      :prepend-icon="item.icon"
    />
  </v-list>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface NavigationItems {
  title: string;
  path: string;
  icon: string;
}

const items: NavigationItems[] = [
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
];

export default defineComponent({
  name: "navbarComponent",
  data: () => ({ items }),
});
</script>
