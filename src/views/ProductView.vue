<script setup>
    import Button from "@/components/Button.vue";
    import FeatureIcon from "@/components/FeatureIcon.vue";
    import { onMounted, ref } from "vue";
    import FeatureText from "../components/FeatureText.vue";
    import useProducts from "@/composables/products";
    import LoadingSpinner from "@/components/LoadingSpinner.vue";
    import { useAuthStore } from "../stores/auth";

    const { isLoadingProducts, product, getDetailProduct } = useProducts();

    const featuredGallery = ref("");
    const galleries = ref([]);
    const auth = useAuthStore();

    onMounted(async () => {
        await getDetailProduct();

        featuredGallery.value = product.value.thumbnails;
        galleries.value.push(product.value.thumbnails);
        product.value.galleries.map((gallery) =>
            galleries.value.push(gallery.url)
        );
    });
</script>

<template>
    <div class="container p-2 mx-auto my-10 max-w-7xl">
        <div class="flex justify-center items-center">
            <template v-if="isLoadingProducts">
                <LoadingSpinner></LoadingSpinner>
            </template>
            <template v-else>
                <template v-if="product">
                    <div class="flex flex-row flex-wrap py-4">
                        <main
                            role="main"
                            class="w-full px-4 pt-1 sm:w-2/3 md:w-2/3"
                        >
                            <h1
                                class="mb-2 text-3xl font-bold leading-normal tracking-tight text-gray-900 sm:text-4xl md:text-4xl"
                            >
                                {{ product.name }}
                            </h1>
                            <p class="text-gray-500">{{ product.subtitle }}</p>
                            <section id="gallery">
                                <img
                                    :src="featuredGallery"
                                    :alt="product.name"
                                    class="w-full mt-6 rounded-2xl"
                                />
                                <div class="grid grid-cols-4 gap-4 mt-4">
                                    <div
                                        v-for="(gallery, index) in galleries"
                                        :key="index + 1"
                                        class="overflow-hidden cursor-pointer rounded-2xl"
                                        :class="{
                                            'ring-2 ring-indigo-500':
                                                featuredGallery === gallery,
                                        }"
                                        @click="featuredGallery = gallery"
                                    >
                                        <img
                                            :src="gallery"
                                            class="w-full"
                                            :alt="product.name"
                                        />
                                    </div>
                                </div>
                            </section>
                            <section class="" id="orders">
                                <h1 class="mt-8 mb-3 text-lg font-semibold">
                                    About
                                </h1>
                                <div
                                    class="text-gray-500"
                                    v-html="product.description"
                                ></div>
                            </section>
                        </main>
                        <aside class="w-full px-4 sm:w-1/3 md:w-1/3">
                            <div class="sticky top-0 w-full pt-4 md:mt-24">
                                <div class="p-6 border rounded-2xl">
                                    <FeatureIcon
                                        :isFigma="product.is_figma"
                                        :isSketch="product.is_sketch"
                                    ></FeatureIcon>
                                    <div>
                                        <h1
                                            class="mt-5 mb-3 font-semibold text-md"
                                        >
                                            Great Features
                                        </h1>
                                        <ul class="mb-6 text-gray-500">
                                            <FeatureText
                                                v-for="featureText in product.features.split(
                                                    ', '
                                                )"
                                                :key="featureText"
                                                :title="featureText"
                                                v-if="product.features"
                                            ></FeatureText>
                                        </ul>
                                    </div>
                                    <a
                                        :href="product.file"
                                        v-if="
                                            auth.user?.subscription?.length > 0
                                        "
                                    >
                                        <Button variant="dark" size="lg">
                                            Download Now
                                        </Button>
                                    </a>
                                    <RouterLink
                                        v-else
                                        :to="{ name: 'pricing' }"
                                    >
                                        <Button variant="dark" size="lg">
                                            Subscribe
                                        </Button>
                                    </RouterLink>
                                </div>
                            </div>
                        </aside>
                    </div>
                </template>
                <template v-else>
                    <h3
                        class="mb-4 text-xl font-medium md:mb-0 md:text-lg mt-4"
                    >
                        No product found
                    </h3>
                </template>
            </template>
        </div>
    </div>
</template>
