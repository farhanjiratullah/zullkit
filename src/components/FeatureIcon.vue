<script setup>
    const { isFigma, isSketch } = defineProps({
        isFigma: {
            type: Number,
            required: true,
            default: 0,
        },
        isSketch: {
            type: Number,
            required: true,
            default: 0,
        },
    });
</script>

<template>
    <div class="mb-4" v-if="isFigma">
        <div class="flex mb-2">
            <div>
                <img src="@/assets/img/icon-figma.png" alt="" class="w-16" />
            </div>
            <div class="block mt-1 ml-4">
                <h3 class="font-semibold text-md">Figma</h3>
                <p class="text-gray-400 text-md">Project Included</p>
            </div>
        </div>
    </div>
    <div class="mb-4" v-if="isSketch">
        <div class="flex mb-2">
            <div>
                <img src="@/assets/img/icon-sketch.png" alt="" class="w-16" />
            </div>
            <div class="block mt-1 ml-4">
                <h3 class="font-semibold text-md" v-if="isFigma">Sketch</h3>
                <p class="text-gray-400 text-md">Project Included</p>
            </div>
        </div>
    </div>
</template>

<style></style>
