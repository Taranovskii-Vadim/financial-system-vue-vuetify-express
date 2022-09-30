import { api } from "@/api";
import getCurrencies from "@/api/getCurrencies";

export default {
  actions: {
    getCurrencies: async () => {
      const result = await api(getCurrencies);

      return result;
    },
  },
};
