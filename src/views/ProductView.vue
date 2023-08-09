<script setup>
    import Button from "@/components/Button.vue";
    import FeatureIcon from "@/components/FeatureIcon.vue";
    import { ref } from "vue";
    import FeatureText from "../components/FeatureText.vue";

    const featuredGallery = ref("gallery-2.png");
    const galleries = ref([
        {
            id: 1,
            url: "gallery-2.png",
        },
        {
            id: 2,
            url: "gallery-3.png",
        },
        {
            id: 3,
            url: "gallery-4.png",
        },
        {
            id: 4,
            url: "gallery-5.png",
        },
    ]);
</script>

<template>
    <div class="container p-2 mx-auto my-10 max-w-7xl">
        <div class="flex flex-row flex-wrap py-4">
            <main role="main" class="w-full px-4 pt-1 sm:w-2/3 md:w-2/3">
                <h1
                    class="mb-2 text-3xl font-bold leading-normal tracking-tight text-gray-900 sm:text-4xl md:text-4xl"
                >
                    RoboCrypto UI Kit
                </h1>
                <p class="text-gray-500">Build your next coin startup</p>
                <section id="gallery">
                    <img
                        :src="`/src/assets/img/${featuredGallery}`"
                        :alt="featuredGallery"
                        class="w-full mt-6 rounded-2xl"
                    />
                    <div class="grid grid-cols-4 gap-4 mt-4">
                        <div
                            v-for="gallery in galleries"
                            :key="gallery.id"
                            class="overflow-hidden cursor-pointer rounded-2xl"
                            :class="{
                                'ring-2 ring-indigo-500':
                                    featuredGallery === gallery.url,
                            }"
                            @click="featuredGallery = gallery.url"
                        >
                            <img
                                :src="`/src/assets/img/${gallery.url}`"
                                class="w-full"
                                :alt="gallery.url"
                            />
                        </div>
                    </div>
                </section>
                <section class="" id="orders">
                    <h1 class="mt-8 mb-3 text-lg font-semibold">About</h1>
                    <div class="text-gray-500">
                        <p class="pb-4">
                            Sportly App UI Kit will help your Sport, Fitness,
                            and Workout App products or services. Came with
                            modern and sporty style, you can easily edit and
                            customize all elements with components that can
                            speed up your design process.
                        </p>
                        <p class="pb-4">
                            Suitable for : <br />
                            - Sport App <br />
                            - Fitness & GYM App <br />
                            - Workout App <br />
                            - Trainer & Tracker App <br />
                            - And many more <br />
                        </p>
                    </div>
                </section>
            </main>
            <aside class="w-full px-4 sm:w-1/3 md:w-1/3">
                <div class="sticky top-0 w-full pt-4 md:mt-24">
                    <div class="p-6 border rounded-2xl">
                        <FeatureIcon></FeatureIcon>
                        <FeatureIcon></FeatureIcon>
                        <div>
                            <h1 class="mt-5 mb-3 font-semibold text-md">
                                Great Features
                            </h1>
                            <ul class="mb-6 text-gray-500">
                                <FeatureText
                                    v-for="featureText in [
                                        'Customizeable layers',
                                        'Documentation',
                                        'Icon set design',
                                        'Pre-built UI screens',
                                    ]"
                                    :key="featureText"
                                    :title="featureText"
                                ></FeatureText>
                            </ul>
                        </div>
                        <Button variant="dark" size="lg"> Download Now </Button>
                    </div>
                </div>
            </aside>
        </div>
    </div>
</template>
