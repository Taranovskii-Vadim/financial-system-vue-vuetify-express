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
          :title="name"
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
        <v-divider />
        <Navbar />
      </v-navigation-drawer>
      <v-main>
        <div class="content">
          <!-- <h4>{{ formattedDate }}</h4> -->
          <router-view />
        </div>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";

const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};

export default defineComponent({
  name: "mainLayout",
  components: { Navbar },
  data: () => ({
    drawer: true,
    rail: true,
    date: new Date(),
    interval: 0,
  }),
  computed: {
    formattedDate() {
      const instance = new Intl.DateTimeFormat("ru-RU", options);

      return instance.format(this.date);
    },
    name(): string {
      return this.$store.getters.userInfo.fullname;
    },
  },
  async mounted() {
    this.$store.dispatch("fetchUserInfo");
    this.interval = setInterval(() => {
      this.date = new Date();
    }, 1000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
});
</script>

<style scoped>
.content {
  padding: 12px 24px;
}
</style>
