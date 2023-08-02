<script setup>
    const { htmlFor, className } = defineProps({
        className: {
            type: String,
            required: false,
            default: "",
        },
        htmlFor: {
            type: String,
            required: true,
            default: "",
        },
    });
</script>

<template>
    <label :class="[`block mb-1 ${className}`]" :for="htmlFor">
        <slot></slot>
    </label>
</template>
