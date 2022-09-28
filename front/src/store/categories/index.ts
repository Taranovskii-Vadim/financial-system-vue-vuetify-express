import axios from "axios";
import { ActionContext } from "vuex";

export default {
  actions: {
    createCategory: async (context: ActionContext<any, any>, payload: any) => {
      try {
        const { data } = await axios.post("/api/categories", payload);
        return data;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
