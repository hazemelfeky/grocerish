import { createRouter, createWebHistory } from "vue-router";
import Products from "../views/Products/index.vue";
import Product from "../views/Products/_id.vue";

const routes = [
  { path: "/", component: () => import("@/views/Home.vue") },
  { path: "/about", component: () => import("@/views/About.vue") },
  { path: "/categories", component: () => import("@/views/Categories.vue") },
  { path: "/products", component: Products },
  { path: "/products/:id", component: Product },
  { path: "/cart", component: () => import("@/views/Cart.vue") },
  {
    path: "/login",
    component: () => import("@/views/Login.vue"),
    meta: { requiresUnAuth: true },
  },
  {
    path: "/signup",
    component: () => import("@/views/Signup.vue"),
    meta: { requiresUnAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from) => {
  const isAuthenticated = !!localStorage.getItem("token");
  if (isAuthenticated) {
    // If is authed and go to login page
    if (to.meta.requiresUnAuth) {
      return { path: "/" };
    }
  } else {
    // If is not authed and go to payment page
    if (to.meta.requiresAuth) {
      return { path: "/login" };
    }
  }
});

export default router;
