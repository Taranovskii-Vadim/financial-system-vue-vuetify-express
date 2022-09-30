import { ActionContext } from "vuex";

import { api } from "@/api";
import postAuth from "@/api/postAuth";

import { CommonData, SignUpData, UserInfo } from "./types";

type Context = ActionContext<any, any>;

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
    setUserInfo(state: any, payload: UserInfo) {
      state.userInfo = payload;
    },
  },
  actions: {
    login: async ({ commit }: Context, payload: CommonData) => {
      try {
        const result: UserInfo = await api(postAuth, payload, "signIn");

        commit("setUserInfo", result);
      } catch (e) {
        commit("setSnackbarText", e);
      }
    },
    register: async ({ commit }: Context, payload: SignUpData) => {
      try {
        const result: UserInfo = await api(postAuth, payload, "signUp");

        commit("setUserInfo", result);
      } catch (e) {
        commit("setSnackbarText", e);
      }
    },
  },
};
