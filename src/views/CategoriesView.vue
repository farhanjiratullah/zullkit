<script setup>
    import ItemCard from "@/components/ItemCard.vue";
    import LoadingSpinner from "@/components/LoadingSpinner.vue";
    import { onMounted } from "vue";
    import useCategories from "@/composables/categories";

    const { isLoadingCategories, categories, getAllCategories } =
        useCategories();

    onMounted(async () => {
        await getAllCategories();
    });
</script>

<template>
    <main>
        <div class="container px-4 mx-auto my-16 md:px-12">
            <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">
                All Categories
            </h2>
            <div
                class="flex flex-wrap -mx-1 lg:-mx-4 justify-center items-center"
                :class="{ 'mt-4': isLoadingCategories }"
            >
                <template v-if="isLoadingCategories">
                    <LoadingSpinner></LoadingSpinner>
                </template>
                <ItemCard
                    v-else
                    v-for="topCategory in categories"
                    :key="topCategory.id"
                    :id="topCategory.id"
                    :name="topCategory.name"
                    :thumbnails="topCategory.thumbnails"
                    :amount="topCategory.products_count"
                    size="md"
                ></ItemCard>
            </div>
        </div>
    </main>
</template>
