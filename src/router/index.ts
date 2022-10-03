import { createRouter, createWebHashHistory } from "vue-router";

import Layout from "@/layout/index.vue";
// import Login from "../views/Login/index.vue";
const routes = [
  // home路径重定向到根路径
  {
    path: "/",
    name: "Layout",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("@/views/Home/index.vue"),
      },
      {
        path: "/detail",
        name: "Detail",
        component: () => import("@/views/Detail/index.vue"),
      },
    ],
  },
  //   {
  //     path: "/login",
  //     name: "Login",
  //     component: Login,
  //   },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
