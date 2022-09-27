import { ActionContext } from "vuex";
import axios from "axios";

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

export default {
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async getInfo({ rootState }: ActionContext<any, any>) {
      const userId = rootState.auth.currentUserId;
      const response = await axios.get(`/api/users/${userId}`);
    },
  },
};
