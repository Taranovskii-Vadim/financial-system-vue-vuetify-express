import axios from "axios";

interface FormData {
  email: string;
  password: string;
}

// TODO there is error with ts and vuex
export default {
  actions: {
    login: async (body: any, data: FormData) => {
      // TODO create common axios method and instance
      const response = await axios.get("/api/auth", { data });
    },
  },
};
