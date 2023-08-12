<script setup>
    const { modelValue, placeholder, id, type, name, className } = defineProps({
        modelValue: {
            required: true,
            default: undefined,
        },
        placeholder: {
            type: String,
            required: true,
            default: "",
        },
        id: {
            type: String,
            required: true,
            default: "",
        },
        type: {
            type: String,
            required: true,
            default: "",
        },
        name: {
            type: String,
            required: true,
            default: "",
        },
        className: {
            type: String,
            required: false,
            default: "",
        },
    });

    defineEmits(["update:modelValue"]);
</script>

<template>
    <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder"
        :id="id"
        :type="type"
        :name="name"
        :class="[
            `block w-full py-3 mt-2 border border-gray-300 rounded-full shadow-sm px-7 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:bg-gray-100 ${className}`,
        ]"
    />
</template>
