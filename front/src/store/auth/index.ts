import axios from "axios";

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
    login: async (actions: any, payload: FormData) => {
      // TODO create common axios method and instance

      const { data } = await axios.post<ResultDTO>("/api/auth/signIn", payload);

      // TODO pass fullname and token to component
    },
    register: async (actions: any, payload: SignUpData) => {
      const { data } = await axios.post<ResultDTO>("/api/auth/signUp", payload);

      console.log(data);
    },
  },
};
