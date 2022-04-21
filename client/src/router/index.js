import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutPage.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginPage.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterPage.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/DashboardPage.vue"),
      children: [
        {
          path: "",
          component: () => import("../views/ListPairPage.vue"),
        },
        {
          path: ":pairId",
          component: () => import("../views/PairPage.vue"),
        },
      ],
    },
  ],
});

export default router;
