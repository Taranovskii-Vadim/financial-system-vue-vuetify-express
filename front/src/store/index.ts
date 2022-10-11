import { createStore } from "vuex";

import auth from "./auth";
import records from "./records";
import currencies from "./currencies";
import categories from "./categories";

interface RootStore {
  snackbarText: string;
}

export default createStore<RootStore>({
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
  modules: { auth, currencies, categories, records },
});
