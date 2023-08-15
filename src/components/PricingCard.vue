<script setup>
    import FeatureText from "@/components/FeatureText.vue";
    import Button from "@/components/Button.vue";
    import useSubscriptions from "@/composables/subscriptions";
    import LoadingSpinner from "@/components/LoadingSpinner.vue";

    const { isLoadingSubscriptions, postSubscription } = useSubscriptions();

    const { price, title, subtitle, features } = defineProps({
        price: {
            type: Number,
            required: true,
            default: 0,
        },
        title: {
            type: String,
            required: true,
            default: "",
        },
        subtitle: {
            type: String,
            required: true,
            default: "",
        },
        features: {
            type: Array,
            required: true,
            default: [],
        },
    });
</script>

<template>
    <div>
        <div class="p-8 border rounded-3xl">
            <h1 class="text-5xl font-semibold">
                {{
                    price.toLocaleString("id-ID", { minimumFractionDigits: 2 })
                }}
                IDR
                <span class="text-xl font-light text-gray-500">/month</span>
            </h1>
            <h2 class="text-lg font-semibold mt-7">{{ title }} Plan</h2>
            <p class="mb-6 text-gray-500">{{ subtitle }}</p>
            <ul class="mb-6 text-gray-700">
                <FeatureText
                    v-for="feature in features"
                    :key="feature"
                    :title="feature"
                ></FeatureText>
            </ul>
            <template v-if="title === 'Basic'">
                <Button
                    variant="light"
                    size="lg"
                    :isLoadingSubscriptions="isLoadingSubscriptions"
                    @click="postSubscription(price)"
                >
                    <template v-if="isLoadingSubscriptions">
                        Loading...
                    </template>
                    <template v-else> Checkout Now </template>
                </Button>
            </template>
            <template v-if="title === 'Gold'">
                <Button
                    variant="dark"
                    size="lg"
                    :isLoadingSubscriptions="isLoadingSubscriptions"
                    @click="postSubscription(price)"
                >
                    <template v-if="isLoadingSubscriptions">
                        Loading...
                    </template>
                    <template v-else> Checkout Now </template>
                </Button>
            </template>
        </div>
    </div>
</template>

<style></style>
