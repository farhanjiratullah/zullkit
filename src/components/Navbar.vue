<script setup>
    import { onMounted, ref } from "vue";
    import { RouterLink, useRoute } from "vue-router";
    import { useAuthStore } from "../stores/auth";
    import Button from "./Button.vue";

    const auth = useAuthStore();

    const router = useRoute();

    const show = ref(false);

    onMounted(async () => {
        await auth.getUser();
    });

    const toggleDropdown = () => {
        show.value = !show.value;
    };

    const logout = () => {
        localStorage.clear("access_token");

        router.push("/login");
    };
</script>

<template>
    <nav
        class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800"
    >
        <div
            class="container flex flex-wrap items-center justify-between mx-auto my-2"
        >
            <RouterLink :to="{ name: 'home' }" class="flex items-center">
                <img
                    src="@/assets/img/logo.svg"
                    class="h-8 ml-3 sm:ml-0 sm:h-8"
                    alt="Zullkit Logo"
                />
            </RouterLink>

            <div class="md:order-2 flex items-center" v-if="auth.isLoggedIn">
                <div class="flex items-center">
                    <div class="mr-2 text-sm font-regular">
                        Halo, {{ auth.user.name }}
                    </div>
                    <button
                        type="button"
                        class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        id="user-menu-button"
                        aria-expanded="false"
                        data-dropdown-toggle="dropdown"
                        @click="toggleDropdown"
                    >
                        <span class="sr-only">Open user menu</span>
                        <img
                            class="w-8 h-8 rounded-full"
                            :src="auth.user.profile_photo_url"
                            :alt="auth.user.name"
                        />
                    </button>
                </div>

                <div
                    class="z-50 fixed top-12 right-20 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                    id="dropdown"
                    :class="{ hidden: !show }"
                >
                    <div class="px-4 py-3">
                        <span
                            class="block text-sm text-gray-900 dark:text-white"
                            >{{ auth.user.name }}</span
                        >
                        <span
                            class="block text-sm text-gray-500 truncate font-regular dark:text-gray-400"
                            >{{ auth.email }}</span
                        >
                    </div>
                    <ul class="py-1" aria-labelledby="dropdown">
                        <li>
                            <a
                                href="#"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >Subscriptions</a
                            >
                        </li>
                        <li>
                            <a
                                href="#"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >Settings</a
                            >
                        </li>
                        <li>
                            <a
                                href=""
                                @click="logout"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >Sign out</a
                            >
                        </li>
                    </ul>
                </div>
            </div>
            <div class="md:order-2" v-else>
                <RouterLink :to="{ name: 'login' }">
                    <Button variant="light" size="md" className="mr-2"
                        >Sign In</Button
                    >
                </RouterLink>
                <RouterLink :to="{ name: 'home' }">
                    <Button variant="dark" size="md">Sign Up</Button>
                </RouterLink>
            </div>
            <div
                class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                id="mobile-menu-2"
            >
                <ul
                    class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-regular"
                >
                    <li>
                        <RouterLink
                            :to="{ name: 'home' }"
                            activeClass="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent text-indigo-600 md:p-0 dark:text-white"
                            class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 md:hover:bg-transparent md:border-0 hover:text-indigo-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >Home</RouterLink
                        >
                    </li>
                    <li>
                        <RouterLink
                            :to="{ name: 'categories' }"
                            activeClass="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent text-indigo-600 md:p-0 dark:text-white"
                            :class="{
                                'block py-2 pl-3 pr-4 text-white rounded md:bg-transparent text-indigo-600 md:p-0 dark:text-white':
                                    router.name === 'category-products',
                            }"
                            class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 md:hover:bg-transparent md:border-0 hover:text-indigo-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >Categories</RouterLink
                        >
                    </li>
                    <li>
                        <RouterLink
                            :to="{ name: 'pricing' }"
                            activeClass="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent text-indigo-600 md:p-0 dark:text-white"
                            class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 md:hover:bg-transparent md:border-0 hover:text-indigo-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >Pricing</RouterLink
                        >
                    </li>
                    <li>
                        <a
                            href="#"
                            class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 md:hover:bg-transparent md:border-0 hover:text-indigo-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >Study Case</a
                        >
                    </li>
                </ul>
            </div>

            <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
            >
                <span class="sr-only">Open main menu</span>
                <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                    />
                </svg>
                <svg
                    class="hidden w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                    />
                </svg>
            </button>
        </div>
    </nav>
</template>

<style></style>
