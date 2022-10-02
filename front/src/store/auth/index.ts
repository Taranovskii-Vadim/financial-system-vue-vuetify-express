import { ActionContext } from "vuex";

import { api } from "@/api";
import postAuth from "@/api/postAuth";
import getProfile from "@/api/getProfile";

import { CommonData, SignUpData, UserInfo } from "./types";

type Context = ActionContext<any, any>;

// TODO there is error with ts and vuex
export default {
  state: {
    // TODO error if reload page because we dont save user data in cookie or storage
    userInfo: { fullname: "", bill: 0 },
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
    fetchUserInfo: async ({ commit }: Context) => {
      try {
        const result: UserInfo = await api(getProfile);

        commit("setUserInfo", result);
      } catch (e) {
        console.log(e);
      }
    },
    login: async ({ commit }: Context, payload: CommonData) => {
      try {
        await api(postAuth, payload, "signIn");
      } catch (e) {
        commit("setSnackbarText", e);
      }
    },
    register: async ({ commit }: Context, payload: SignUpData) => {
      try {
        await api(postAuth, payload, "signUp");
      } catch (e) {
        commit("setSnackbarText", e);
      }
    },
  },
};
