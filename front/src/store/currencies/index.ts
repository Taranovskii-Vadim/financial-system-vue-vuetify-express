import { api } from "@/api";
import getCurrencies from "@/api/getCurrencies";

import { Currency } from "./types";

export default {
  actions: {
    getCurrencies: async () => {
      const result: Currency[] = await api(getCurrencies);

      return result;
    },
  },
};
