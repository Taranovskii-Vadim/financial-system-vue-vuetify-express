import { ActionContext } from "vuex";

import { api } from "@/api";
import postCategory from "@/api/postCategory";

import { FormPayload } from "./types";

type Context = ActionContext<any, any>;

export default {
  actions: {
    createCategory: async (context: Context, payload: FormPayload) => {
      try {
        const result: number = await api(postCategory, payload);

        return result;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
