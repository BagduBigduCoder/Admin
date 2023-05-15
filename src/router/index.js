import { createRouter, createWebHistory } from "vue-router";
import HomePageView from "../views/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePageView,
    },
    {
      path: "/error",
      name: "error",
      component: () => import("../views/ErrorPage.vue"),
    },
  ],
});

export default router;
