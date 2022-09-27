import axios from "axios";
import { ActionContext } from "vuex";

export default {
  state: {
    currencies: null,
  },
  getters: {
    currencies: (state: any) => state.currencies,
  },
  mutations: {
    setCurrencies(state: any, currencies: any) {
      state.currencies = currencies;
    },
  },
  actions: {
    getCurrencies: async ({ commit }: ActionContext<any, any>) => {
      try {
        const { data } = await axios.get("/api/currencies");

        commit("setCurrencies", data);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
