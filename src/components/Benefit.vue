<script setup>
    const { svg, title, description } = defineProps({
        svg: {
            type: String,
            required: true,
            default: "",
        },
        title: {
            type: String,
            required: true,
            default: "",
        },
        description: {
            type: String,
            required: true,
            default: "",
        },
    });
</script>

<template>
  <div class="mb-12">
    <div class="block mb-2">
      <div v-html="svg" class="inline-block"></div>
      <h3 class="inline-block ml-2 text-lg font-semibold">
        {{ title }}
      </h3>
    </div>
    <p class="mt-2 text-lg text-gray-500">
      <div v-html="description"></div>
    </p>
  </div>
</template>

<style></style>
