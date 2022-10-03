import { ActionContext } from "vuex";

import { api } from "@/api";
import postRecord from "@/api/postRecord";

import { FormPayload } from "./types";

export default {
  actions: {
    createRecord: async (
      context: ActionContext<any, any>,
      payload: FormPayload
    ) => {
      const result = await api(postRecord, payload);
      return result;
    },
  },
};
