import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AddCard from "../views/AddCard";

const routes = [
  {
    path: "/cards",
    name: "Home",
    component: Home,
  },
  {
    path: "/addcard",
    name: "AddCard",
    component: AddCard,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
