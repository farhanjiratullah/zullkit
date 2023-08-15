<script setup>
    import { RouterLink, useRoute } from "vue-router";

    const router = useRoute();

    const { size, name, thumbnails, amount, category } = defineProps({
        size: {
            type: String,
            required: true,
            default: "md",
        },
        name: {
            type: String,
            required: true,
            default: "",
        },
        id: {
            type: Number,
            required: true,
            default: 0,
        },
        thumbnails: {
            type: String,
            required: true,
            default: "",
        },
        amount: {
            type: Number,
            required: false,
            default: undefined,
        },
        category: {
            type: String,
            required: false,
            default: "",
        },
        subtitle: {
            type: String,
            required: false,
            default: "",
        },
    });
</script>

<template>
    <div
        :class="[
            'w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4',
            { 'lg:w-1/4': size === 'md' },
            { 'lg:w-1/3': size === 'lg' },
        ]"
    >
        <div class="overflow-hidden border border-gray-200 rounded-xl">
            <RouterLink
                :to="{ name: 'category-products', params: { id } }"
                v-if="amount !== undefined"
            >
                <div class="m-4 overflow-hidden rounded-xl">
                    <img
                        alt="Placeholder"
                        class="block w-full h-auto"
                        :src="thumbnails"
                    />
                </div>
            </RouterLink>
            <RouterLink
                :to="{ name: 'product', params: { id } }"
                v-if="amount === undefined"
            >
                <div class="m-4 overflow-hidden rounded-xl">
                    <img
                        alt="Placeholder"
                        class="block w-full h-auto"
                        :src="thumbnails"
                    />
                </div>
            </RouterLink>

            <header class="px-4 mb-4 leading-tight">
                <h1 class="text-lg">
                    <RouterLink
                        class="font-semibold text-black no-underline hover:underline"
                        :to="{ name: 'category-products', params: { id } }"
                        v-if="amount !== undefined"
                    >
                        {{ name }}
                    </RouterLink>
                </h1>
                <h1 class="text-lg">
                    <RouterLink
                        class="font-semibold text-black no-underline hover:underline"
                        :to="{ name: 'product', params: { id } }"
                        v-if="amount === undefined"
                    >
                        {{ name }}
                    </RouterLink>
                </h1>
                <span
                    class="block text-sm font-light text-gray-500 no-underline"
                    v-if="router.name === 'category-products'"
                >
                    {{ subtitle }}
                </span>
                <span
                    class="block text-sm font-light text-gray-500 no-underline"
                    v-if="amount === undefined"
                >
                    {{ category }}
                </span>
                <span
                    class="block text-sm font-light text-gray-500 no-underline"
                    v-if="amount !== undefined"
                >
                    {{ amount.toLocaleString("id-ID") }}
                    {{ amount > 1 ? "items" : "item" }}
                </span>
            </header>
        </div>
    </div>
</template>

<style></style>
