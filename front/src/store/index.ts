import { createStore } from "vuex";

import auth from "./auth";

export interface RootStore {
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
  actions: {},
  modules: { auth },
});
