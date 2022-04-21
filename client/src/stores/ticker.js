import { defineStore } from "pinia";
import axios from "axios";

export const useTickerStore = defineStore({
  id: "ticker",
  state: () => ({}),
  getters: {},
  actions: {
    getTickerAction(id) {
      return axios.get(
        `https://kriptoku-server.herokuapp.com/main/ticker/${id}`,
        {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        }
      );
    },
  },
});
