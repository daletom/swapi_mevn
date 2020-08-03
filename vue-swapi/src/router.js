import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/swapis",
      name: "swapis",
      component: () => import("./components/SwapisList")
    },
    {
      path: "/swapis/edit/:id",
      name: "swapi-edit",
      component: () => import("./components/SwapiEdit")
    },
    {
      path: "/swapis/:id",
      name: "swapi",
      component: () => import("./components/Swapi")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddSwapi")
    }
  ]
});