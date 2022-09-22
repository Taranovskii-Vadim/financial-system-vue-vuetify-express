<template>
  <v-list class="root" density="compact" nav>
    <div>
      <v-list-item
        link
        v-for="item in topItems"
        :key="item.path"
        :to="item.path"
        :title="item.title"
        :prepend-icon="item.icon"
      />
    </div>
    <div>
      <v-list-item
        link
        v-for="item in bottomItems"
        :key="item.path"
        :to="item.path"
        :title="item.title"
        :prepend-icon="item.icon"
      />
    </div>
  </v-list>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface NavigationItems {
  title: string;
  path: string;
  icon: string;
}

const topItems: NavigationItems[] = [
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
];

const bottomItems: NavigationItems[] = [
  { title: "Настройки", path: "/profile", icon: "mdi-home-city" },
  { title: "Выйти", path: "/logout", icon: "mdi-home-city" },
];

export default defineComponent({
  name: "navbarComponent",
  data: () => ({ topItems, bottomItems }),
});
</script>

<style scoped>
.root {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 93vh;
}
</style>
