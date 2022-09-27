import axios from "axios";
import { ActionContext } from "vuex";

interface CommonData {
  email: string;
  password: string;
}

interface SignUpData extends CommonData {
  name: string;
}

interface ResultDTO {
  bill: number;
  token: string;
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
        // TODO create common axios method and instance

        // TODO pass fullname and token to component
        const { data } = await axios.post<ResultDTO>(
          "/api/auth/signIn",
          payload
        );

        commit("setUserInfo", data);
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
        const { data } = await axios.post<ResultDTO>(
          "/api/auth/signUp",
          payload
        );

        commit("setUserInfo", data);
      } catch ({ response: { data } }) {
        commit("setSnackbarText", data);
      }
    },
  },
};
