import Vue from "vue";
import VueRouter from "vue-router";

import LayoutMain from "@/components/layout/LayoutMain";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: LayoutMain,
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("../views/Home.vue")
      },
      {
        path: "*",
        redirect: "/"
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
