import { ActionContext } from "vuex";
import axios from "axios";

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
