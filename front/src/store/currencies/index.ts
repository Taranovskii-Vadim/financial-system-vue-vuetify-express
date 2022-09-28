import axios from "axios";

export default {
  actions: {
    getCurrencies: async () => {
      const { data } = await axios.get("/api/currencies");
      return data;
    },
  },
};
