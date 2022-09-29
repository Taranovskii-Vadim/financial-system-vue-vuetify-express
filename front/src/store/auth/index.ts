import axios from "axios";
import { ActionContext } from "vuex";

import { api } from "@/api";
import postAuth from "@/api/postAuth";

interface CommonData {
  email: string;
  password: string;
}

interface SignUpData extends CommonData {
  name: string;
}

interface ResultDTO {
  bill: number;
  fullname: string;
}

// TODO there is error with ts and vuex
export default {
  state: {
    // TODO error if reload page because we dont save user data in cookie or storage
    userInfo: null,
  },
  getters: {
    userInfo: (state: any) => state.userInfo,
  },
  mutations: {
    setUserInfo(state: any, userInfoDTO: ResultDTO) {
      state.userInfo = userInfoDTO;
    },
  },
  actions: {
    login: async ({ commit }: ActionContext<any, any>, payload: FormData) => {
      try {
        const result: any = await api(postAuth, payload, "signIn");

        commit("setUserInfo", result);
      } catch ({ response: { data } }) {
        // TODO fix ts error
        commit("setSnackbarText", data);
      }
    },
    register: async (
      { commit }: ActionContext<any, any>,
      payload: SignUpData
    ) => {
      try {
        const result: any = await api(postAuth, payload, "signUp");

        commit("setUserInfo", result);
      } catch ({ response: { data } }) {
        commit("setSnackbarText", data);
      }
    },
  },
};
