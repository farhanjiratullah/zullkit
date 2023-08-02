<script setup>
    const { type, className } = defineProps({
        type: {
            type: String,
            required: false,
            default: "button",
        },
        variant: {
            type: String,
            required: true,
            default: "dark",
        },
        size: {
            type: String,
            required: true,
            default: "md",
        },
        className: {
            type: String,
            required: false,
            default: "",
        },
    });
</script>

<template>
    <button
        :type="type"
        :class="[
            {
                'items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-navy border border-transparent rounded-full hover:opacity-75 md:py-2 md:text-lg md:px-10 hover:shadow':
                    size === 'lg' && variant === 'dark',
            },
            {
                'items-center justify-center w-full px-8 py-3 text-base font-medium text-black bg-gray-200 border border-transparent rounded-full hover:bg-gray-300 md:py-2 md:text-lg md:px-10 hover:shadow':
                    size === 'lg' && variant === 'light',
            },
            {
                'px-8 py-3 mt-2 text-base font-medium text-black bg-gray-200 border border-transparent rounded-full hover:bg-gray-300 md:py-2 md:text-sm md:px-8 hover:shadow':
                    size === 'md' && variant === 'light',
            },
            {
                'px-8 py-3 text-base font-medium text-white border border-transparent rounded-full bg-navy hover:opacity-75 md:py-2 md:text-sm md:px-8 hover:shadow':
                    size === 'md' && variant === 'dark',
            },
            className,
        ]"
    >
        <slot></slot>
    </button>
</template>
