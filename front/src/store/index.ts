import { createStore } from "vuex";

import auth from "./auth";

export default createStore({
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
    resetSnackbarText(state) {
      state.snackbarText = "";
    },
  },
  actions: {},
  modules: { auth },
});
