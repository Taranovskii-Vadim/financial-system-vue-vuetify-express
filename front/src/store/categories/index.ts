import { ActionContext } from "vuex";

import { api } from "@/api";
import putCategory from "@/api/putCategory";
import postCategory from "@/api/postCategory";
import getCategories from "@/api/getCategories";

import { Category } from "./types";

type Context = ActionContext<any, any>;

export default {
  actions: {
    getCategories: async () => {
      try {
        const result = await api(getCategories);

        return result;
      } catch (e) {
        console.log(e);
      }
    },
    createCategory: async (context: Context, payload: Category) => {
      try {
        const result: number = await api(postCategory, payload);

        return result;
      } catch (e) {
        console.log(e);
      }
    },
    updateCategory: async (context: Context, { id, ...payload }: Category) => {
      try {
        await api(putCategory, payload, id);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
