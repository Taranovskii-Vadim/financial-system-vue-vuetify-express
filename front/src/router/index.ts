import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    meta: { layout: "main" },
    component: () => import("../pages/HomePage.vue"),
  },
  {
    path: "/categories",
    name: "categories",
    meta: { layout: "main" },
    component: () => import("../pages/CategoriesPage.vue"),
  },
  {
    path: "/login",
    name: "login",
    meta: { layout: "empty" },
    component: () => import("../pages/LoginPage.vue"),
  },
  {
    path: "/signUp",
    name: "signUp",
    meta: { layout: "empty" },
    component: () => import("../pages/SignUpPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
