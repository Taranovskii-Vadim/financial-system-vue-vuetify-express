import axios from "axios";

interface FormData {
  email: string;
  password: string;
}

// TODO there is error with ts and vuex
export default {
  actions: {
    login: async (actions: any, payload: FormData) => {
      // TODO create common axios method and instance
      interface ResultDTO {
        fullname: string;
        token: string;
      }

      const { data } = await axios.post<ResultDTO>("/api/auth/signIn", payload);

      // TODO pass fullname and token to component
    },
  },
};
