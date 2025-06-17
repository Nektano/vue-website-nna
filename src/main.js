import "./assets/main.css";
import { createRouter, createWebHistory } from "vue-router";
import { createApp } from "vue";
import App from "./App.vue";
import CatalogView from "./views/CatalogView.vue";
import HomeView from "./views/HomeView.vue";
import MailFormView from "./views/MailFormView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/catalog",
    name: "Catalog",
    component: CatalogView,
  },
  {
    path: "/mailform",
    name: "mailform",
    component: MailFormView,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
createApp(App).use(router).mount("#app");
