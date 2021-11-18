import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import Home from "../views/Home.vue";
import ProjectDetails from "../views/ProjectDetails.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/:id",
    name: "HomeWithLink",
    component: Home
  },
  {
    path: "/projectdetails/:id",
    name: "ProjectDetails",
    component: ProjectDetails
  },
  {
    path: '*',
    name: "catchAll",
    component: Home
  }
];

const router = new VueRouter({
  routes
});

export default router;
