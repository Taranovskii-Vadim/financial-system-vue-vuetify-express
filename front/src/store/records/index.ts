import { ActionContext } from "vuex";

import { api } from "@/api";
import getRecords from "@/api/getRecords";
import postRecord from "@/api/postRecord";

import { FormPayload } from "./types";

export default {
  actions: {
    getRecords: async (context: ActionContext<any, any>) => {
      const result = await api(getRecords);

      return result;
    },
    createRecord: async (
      context: ActionContext<any, any>,
      payload: FormPayload
    ) => {
      const result = await api(postRecord, payload);
      return result;
    },
  },
};
