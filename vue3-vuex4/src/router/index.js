import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

import Todo from "@/pages/Todo.vue";
import ProductList from "@/pages/ProductList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/todo",
      name: "todo",
      component: Todo,
    },
    {
      path: "/products",
      name: "product",
      component: ProductList,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
