import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/signIn",
    name: "signIn",
    meta: { layout: "empty" },
    component: () => import("../pages/SignInPage.vue"),
  },
  {
    path: "/signUp",
    name: "signUp",
    meta: { layout: "empty" },
    component: () => import("../pages/SignUpPage.vue"),
  },
  {
    path: "/",
    name: "home",
    meta: { layout: "main", auth: true },
    component: () => import("../pages/HomePage.vue"),
  },
  {
    path: "/categories",
    name: "categories",
    meta: { layout: "main", auth: true },
    component: () => import("../pages/CategoriesPage.vue"),
  },
  {
    path: "/record",
    name: "record",
    meta: { layout: "main", auth: true },
    component: () => import("../pages/RecordPage.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    meta: { layout: "main", auth: true },
    component: () => import("../pages/ProfilePage.vue"),
  },
  {
    path: "/planning",
    name: "planning",
    meta: { layout: "main", auth: true },
    component: () => import("../pages/PlanningPage.vue"),
  },
  {
    path: "/detail",
    name: "detail",
    meta: { layout: "main", auth: true },
    component: () => import("../pages/DetailPage.vue"),
  },
  {
    path: "/history",
    name: "history",
    meta: { layout: "main", auth: true },
    component: () => import("../pages/HistoryPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = document.cookie.split("token=")[1];
  const isAuth = to.matched.some((item) => item.meta.auth);

  if (isAuth && !token) {
    next("/signIn");
  } else {
    next();
  }
});

export default router;
