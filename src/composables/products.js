import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";

export default function useProducts() {
    const products = ref([]);
    const product = ref({});
    const isLoadingProducts = ref(true);

    const router = useRoute();

    const getNewItems = async () => {
        try {
            const {
                data: {
                    data: { data: data },
                },
            } = await axios.get("products", { params: { limit: 3 } });

            products.value = data;
        } catch (error) {
            console.error(error);
        } finally {
            isLoadingProducts.value = false;
        }
    };

    const getDetailProduct = async () => {
        try {
            const {
                data: { data: data },
            } = await axios.get("products", {
                params: { id: router.params.id },
            });

            // console.log(data);

            product.value = data;
        } catch (error) {
            console.error(error);
        } finally {
            isLoadingProducts.value = false;
        }
    };

    return {
        isLoadingProducts,
        products,
        product,
        getNewItems,
        getDetailProduct,
    };
}
