import Vue from "vue";
import VueRouter from "vue-router";
import AddSmoothie from "@/components/AddSmoothie";
import Index from "@/components/Index";
import EditSmoothie from "@/components/EditSmoothie";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/about",
    name: "about",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/add-smoothie",
    name: "AddSmoothie",
    component: AddSmoothie
  },
  {
    path: "/edit-smoothie/:smoothie_slug",
    name: "EditSmoothie",
    component: EditSmoothie
  }
];

const router = new VueRouter({
  routes
});

export default router;
