<script setup>
    const { title } = defineProps({
        title: {
            type: String,
            required: true,
            default: "",
        },
    });
</script>

<template>
    <li class="mb-2">
        {{ title }}
        <img
            src="@/assets/img/icon-check.png"
            class="float-right w-5 mt-1"
            alt=""
        />
    </li>
</template>

<style></style>
