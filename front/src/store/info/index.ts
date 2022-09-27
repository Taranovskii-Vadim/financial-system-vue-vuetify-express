import axios from "axios";
import { ActionContext } from "vuex";

interface ResultDTO {
  fullname: string;
  bill: number;
}

interface State {
  info: ResultDTO;
}

export default {
  state: {
    info: { fullname: "", bill: 0 },
  },
  getters: {
    info: (state: State) => state.info,
  },
  mutations: {
    setInfo(state: State, info: ResultDTO) {
      state.info = info;
    },
  },
  actions: {
    async getInfo({ rootState, commit }: ActionContext<any, any>) {
      const userId = rootState.auth.currentUserId;
      const { data } = await axios.get(`/api/users/${userId}`);
      commit("setInfo", data);
    },
  },
};
