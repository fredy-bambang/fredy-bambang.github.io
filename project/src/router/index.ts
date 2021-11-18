import { createWebHistory, createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import ForRecruiter from "../views/ForRecruiter.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/for-recruiter",
    name: "ForRecruiter",
    component: ForRecruiter,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;