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
      return axios.post("http://localhost:3000/user/login", {
        user: payload.user,
        password: payload.password,
      });
    },
    registerAction(payload) {
      return axios.post("http://localhost:3000/user/register", {
        username: payload.username,
        email: payload.email,
        password: payload.password,
      });
    },
  },
});
