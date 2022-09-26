import axios, { AxiosError, AxiosResponse } from "axios";

interface CommonData {
  email: string;
  password: string;
}

interface SignUpData extends CommonData {
  name: string;
}

interface ResultDTO {
  fullname: string;
  token: string;
}

// TODO there is error with ts and vuex
export default {
  actions: {
    login: async ({ commit }: any, payload: FormData) => {
      try {
        // TODO create common axios method and instance

        // TODO pass fullname and token to component
        const { data } = await axios.post<ResultDTO>(
          "/api/auth/signIn",
          payload
        );
      } catch ({ response: { data } }) {
        // TODO fix ts error
        commit("setSnackbarText", data);
      }
    },
    register: async ({ commit }: any, payload: SignUpData) => {
      try {
        const { data } = await axios.post<ResultDTO>(
          "/api/auth/signUp",
          payload
        );

        console.log(data);
      } catch ({ response: { data } }) {
        commit("setSnackbarText", data);
      }
    },
  },
};
