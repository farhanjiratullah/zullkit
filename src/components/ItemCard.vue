<script setup>
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
        thumbnails: {
            type: String,
            required: true,
            default: "",
        },
        amount: {
            type: Number,
            required: false,
            default: 0,
        },
        category: {
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
            <a href="details.html">
                <div class="m-4 overflow-hidden rounded-xl">
                    <img
                        alt="Placeholder"
                        class="block w-full h-auto"
                        :src="thumbnails"
                    />
                </div>
            </a>

            <header class="px-4 mb-4 leading-tight">
                <h1 class="text-lg">
                    <a
                        class="font-semibold text-black no-underline hover:underline"
                        href="#"
                    >
                        {{ name }}
                    </a>
                </h1>
                <span
                    class="block text-sm font-light text-gray-500 no-underline"
                    v-if="amount !== undefined && !category"
                >
                    {{ amount.toLocaleString("id-ID") }}
                    {{ amount > 1 ? "items" : "item" }}
                </span>
                <span
                    class="block text-sm font-light text-gray-500 no-underline"
                    v-if="category"
                >
                    {{ category }}
                </span>
            </header>
        </div>
    </div>
</template>

<style></style>
