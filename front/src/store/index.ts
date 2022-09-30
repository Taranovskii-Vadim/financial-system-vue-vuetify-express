import { createStore } from "vuex";

import auth from "./auth";
import currencies from "./currencies";
import categories from "./categories";

export default createStore<{
  snackbarText: string;
}>({
  state: {
    snackbarText: "",
  },
  getters: {
    snackbarText: (state) => state.snackbarText,
  },
  mutations: {
    setSnackbarText(state, text) {
      state.snackbarText = text;
    },
  },
  actions: {},
  modules: { auth, currencies, categories },
});
