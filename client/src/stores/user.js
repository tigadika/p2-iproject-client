import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    isLogin: false,
  }),
  getters: {},
  actions: {
    loginAction(payload) {
      return axios.post("https://kriptoku-server.herokuapp.com/user/login", {
        user: payload.user,
        password: payload.password,
      });
    },
    registerAction(payload) {
      return axios.post("https://kriptoku-server.herokuapp.com/user/register", {
        username: payload.username,
        email: payload.email,
        password: payload.password,
      });
    },
  },
});
