<script setup>
    import ItemCard from "@/components/ItemCard.vue";
    import Button from "@/components/Button.vue";
    import LoadingSpinner from "@/components/LoadingSpinner.vue";
    import { onMounted, ref } from "vue";
    import useCategories from "@/composables/categories";
    import useProducts from "@/composables/products";

    const { isLoadingCategories, topCategories, getTopCategories } =
        useCategories();
    const { isLoadingProducts, newItems, getNewItems } = useProducts();

    onMounted(async () => {
        await getTopCategories();
        await getNewItems();
    });
</script>

<template>
    <main>
        <div class="relative overflow-hidden bg-white">
            <div class="mx-auto max-w-7xl">
                <div
                    class="z-10 px-5 pb-8 bg-white xl:pl-20 lg:pl-16 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
                >
                    <main
                        class="mx-auto mt-10 max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-36"
                    >
                        <div class="sm:text-center lg:text-left">
                            <h1
                                class="text-3xl font-bold leading-normal tracking-tight text-gray-900 sm:text-4xl md:text-5xl"
                            >
                                <span class="block lg:mb-2"
                                    >Design Better &</span
                                >
                                <span class="block">Faster Than Before.</span>
                            </h1>
                            <p
                                class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                            >
                                Accelerate your work with our millions
                                <span class="block lg:mb-1"></span> of
                                ready-to-use design projects.
                            </p>
                            <div
                                class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
                            >
                                <div class="rounded-full">
                                    <Button
                                        size="lg"
                                        variant="dark"
                                        className="flex"
                                    >
                                        Browse Now
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                    class="w-full lg:w-3/4 lg:mt-8"
                    src="@/assets/img/hero-image.png"
                    alt=""
                />
            </div>
        </div>

        <div class="container px-4 mx-auto my-16 md:px-12">
            <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">
                Top Categories
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
                    v-for="topCategory in topCategories"
                    :key="topCategory.id"
                    :name="topCategory.name"
                    :thumbnails="topCategory.thumbnails"
                    :amount="topCategory.products_count"
                    size="md"
                ></ItemCard>
            </div>
        </div>

        <div class="container px-4 mx-auto my-16 md:px-12">
            <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">
                New Items
            </h2>
            <div
                class="flex flex-wrap -mx-1 lg:-mx-4 justify-center items-center"
                :class="{ 'mt-4': isLoadingProducts }"
            >
                <template v-if="isLoadingProducts">
                    <LoadingSpinner></LoadingSpinner>
                </template>
                <ItemCard
                    v-else
                    v-for="newItem in newItems"
                    :key="newItem.id"
                    :name="newItem.name"
                    :thumbnails="newItem.thumbnails"
                    :category="newItem.category.name"
                    size="lg"
                ></ItemCard>
            </div>
        </div>
    </main>
</template>
