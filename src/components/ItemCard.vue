<script setup>
    const { size } = defineProps({
        size: {
            type: String,
            required: true,
            default: "md",
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
                        src="@/assets/img/categories-1.jpg"
                    />
                </div>
            </a>

            <header class="px-4 mb-4 leading-tight">
                <h1 class="text-lg">
                    <a
                        class="font-semibold text-black no-underline hover:underline"
                        href="#"
                    >
                        Mobile UI Kit
                    </a>
                </h1>
                <span
                    class="block text-sm font-light text-gray-500 no-underline"
                >
                    731 items
                </span>
            </header>
        </div>
    </div>
</template>

<style></style>
