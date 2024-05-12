import { createRouter, createWebHistory } from "vue-router";
import About from "@/views/About.vue";
import Categories from "@/views/Categories.vue";
import Products from "@/views/Products/index.vue";
import Product from "@/views/Products/_id.vue";
import Cart from "@/views/Cart.vue";

const routes = [
  { path: "/", component: () => import("@/views/Home.vue") },
  { path: "/about", component: About },
  { path: "/categories", component: Categories },
  { path: "/products", component: () => import("../views/Products/index.vue") },
  { path: "/products/:id", component: Product },
  { path: "/cart", component: Cart },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
