import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

import Loader from "@/components/ui/Loader.vue";

loadFonts();

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .component("Loader", Loader)
  .mount("#app");
