import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const LoginView = () => import("@/views/LoginView.vue");
const RegisterView = () => import("@/views/RegisterView.vue");
const HomeView = () => import("@/views/HomeView.vue");
const CategoriesView = () => import("@/views/CategoriesView.vue");
const CategoryProductsView = () => import("@/views/CategoryProductsView.vue");
const PricingView = () => import("@/views/PricingView.vue");
const ProductView = () => import("@/views/ProductView.vue");
const SuccessView = () => import("@/views/SuccessView.vue");

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
    routes: [
        {
            path: "/login",
            name: "login",
            beforeEnter: async (to, from, next) => {
                const auth = useAuthStore();

                await auth.getUser();

                auth.isLoggedIn ? next({ name: "home" }) : next();
            },
            component: LoginView,
        },
        {
            path: "/register",
            name: "register",
            beforeEnter: async (to, from, next) => {
                const auth = useAuthStore();

                await auth.getUser();

                auth.isLoggedIn ? next({ name: "home" }) : next();
            },
            component: RegisterView,
        },
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
            path: "/categories/:id",
            name: "category-products",
            component: CategoryProductsView,
        },
        {
            path: "/pricing",
            name: "pricing",
            component: PricingView,
        },
        {
            path: "/product/:id",
            name: "product",
            component: ProductView,
        },
        {
            path: "/success",
            name: "success",
            component: SuccessView,
        },
    ],
});

export default router;
