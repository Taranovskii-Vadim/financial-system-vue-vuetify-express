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
  id: number;
  token: string;
}

// TODO there is error with ts and vuex
export default {
  state: {
    currentUserId: null,
  },
  getters: {
    currentUserId: (state: any) => state.currentUserId,
  },
  mutations: {
    setCurrentUserId(state: any, id: number) {
      state.currentUserId = id;
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

        commit("setCurrentUserId", data.id);
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

        commit("setCurrentUserId", data.id);
      } catch ({ response: { data } }) {
        commit("setSnackbarText", data);
      }
    },
  },
};
