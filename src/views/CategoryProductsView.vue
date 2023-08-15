<script setup>
    import ItemCard from "@/components/ItemCard.vue";
    import LoadingSpinner from "@/components/LoadingSpinner.vue";
    import { onMounted } from "vue";
    import useCategories from "@/composables/categories";

    const {
        isLoadingCategories,
        category,
        categoryProducts,
        getAllProductsByCategory,
    } = useCategories();

    onMounted(async () => {
        await getAllProductsByCategory();
    });
</script>

<template>
    <main>
        <div class="container px-4 mx-auto my-16 md:px-12">
            <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">
                All {{ category.name }} Items
            </h2>
            <div
                class="flex flex-wrap -mx-1 lg:-mx-4 justify-center items-center"
                :class="{ 'mt-4': isLoadingCategories }"
            >
                <template v-if="isLoadingCategories">
                    <LoadingSpinner></LoadingSpinner>
                </template>
                <template v-else>
                    <template v-if="categoryProducts.length">
                        <ItemCard
                            v-for="product in categoryProducts"
                            :key="product.id"
                            :id="product.id"
                            :name="product.name"
                            :thumbnails="product.thumbnails"
                            :subtitle="product.subtitle"
                            size="lg"
                        ></ItemCard>
                    </template>
                    <template v-else>
                        <h3
                            class="mb-4 text-xl font-medium md:mb-0 md:text-lg mt-4"
                        >
                            There are no products found
                        </h3>
                    </template>
                </template>
            </div>
        </div>
    </main>
</template>
