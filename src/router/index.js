import { createRouter, createWebHistory } from "vue-router";

const HomeView = () => import("../views/HomeView.vue");
const CategoriesView = () => import("../views/CategoriesView.vue");
const PricingView = () => import("../views/PricingView.vue");

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/categories",
            name: "categories",
            component: CategoriesView,
        },
        {
            path: "/pricing",
            name: "pricing",
            component: PricingView,
        },
    ],
});

export default router;
