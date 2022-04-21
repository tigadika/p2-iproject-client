import { defineStore } from "pinia";
import axios from "axios";

export const useTickerStore = defineStore({
  id: "ticker",
  state: () => ({}),
  getters: {},
  actions: {
    getTickerAction(id) {
      return axios.get(`http://localhost:3000/main/ticker/${id}`, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
    },
  },
});
