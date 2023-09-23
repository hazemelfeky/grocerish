import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Products from "@/views/products/index.vue";
import Product from "@/views/products/_id.vue";
import Cart from "@/views/Cart.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/products", component: Products },
  { path: "/products/:id", component: Product },
  { path: "/cart", component: Cart },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
